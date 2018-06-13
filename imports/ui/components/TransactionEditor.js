/* eslint-disable max-len, no-return-assign */

import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import transactionEditor from '../../modules/transaction-editor.js';

export default class TransactionEditor extends React.Component {
  componentDidMount() {
    transactionEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="client_transaction_id"]').focus(); }, 0);
  }

  render() {
    const { transaction } = this.props;
    return (<form
      ref={ form => (this.transactionEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>Transaction ID</ControlLabel>
        <FormControl
          type="text"
          name="client_transaction_id"
          defaultValue={ transaction && transaction.client_transaction_id }
          placeholder="Transaction ID"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Amount</ControlLabel>
        <FormControl
          type="text"
          name="amount"
          defaultValue={ transaction && transaction.amount }
          placeholder="Amount"
        />
      </FormGroup>
      <Button type="submit" bsStyle="success">
        { transaction && transaction._id ? 'Save Changes' : 'Add Transaction' }
      </Button>
    </form>);
  }
}

TransactionEditor.propTypes = {
  transaction: PropTypes.object,
};

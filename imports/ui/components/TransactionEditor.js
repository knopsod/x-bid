/* eslint-disable max-len, no-return-assign */

import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';
import transactionEditor from '../../modules/transaction-editor.js';

export default class TransactionEditor extends React.Component {
  componentDidMount() {
    transactionEditor({ component: this });
    setTimeout(() => { document.querySelector('[name="orderId"]').focus(); }, 0);
  }

  render() {
    const { transaction } = this.props;
    return (<form
      ref={ form => (this.transactionEditorForm = form) }
      onSubmit={ event => event.preventDefault() }
    >
      <FormGroup>
        <ControlLabel>Order ID</ControlLabel>
        <FormControl
          type="text"
          name="orderId"
          defaultValue={ transaction && transaction.orderId }
          placeholder="Order ID"
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Bank</ControlLabel>
        <FormControl
          componentClass="textarea"
          name="bank"
          defaultValue={ transaction && transaction.bank }
          placeholder="Bank"
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

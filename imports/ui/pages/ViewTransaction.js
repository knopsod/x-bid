import React from 'react';
import PropTypes from 'prop-types';
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap';
import { browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import { Bert } from 'meteor/themeteorchef:bert';
import Transactions from '../../api/transactions/transactions';
import { removeTransaction } from '../../api/transactions/methods';
import NotFound from './NotFound';
import container from '../../modules/container';

const handleEdit = (_id) => {
  browserHistory.push(`/transactions/${_id}/edit`);
};

const handleRemove = (_id) => {
  if (confirm('Are you sure? This is permanent!')) {
    removeTransaction.call({ _id }, (error) => {
      if (error) {
        Bert.alert(error.reason, 'danger');
      } else {
        Bert.alert('Transaction deleted!', 'success');
        browserHistory.push('/transactions');
      }
    });
  }
};

const ViewTransaction = ({ transaction }) => {
  return transaction ? (
    <div className="ViewTransaction">
      <div className="page-header clearfix">
        <h4 className="pull-left">{ transaction && transaction.orderId }</h4>
        <ButtonToolbar className="pull-right">
          <ButtonGroup bsSize="small">
            <Button onClick={ () => handleEdit(transaction._id) }>Edit</Button>
            <Button onClick={ () => handleRemove(transaction._id) }
              className="text-danger">Delete</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      { transaction && transaction.bank }
    </div>
  ) : <NotFound />;
};

ViewTransaction.propTypes = {
  transaction: PropTypes.object,
};

export default container((props, onData) => {
  const transactionId = props.params._id;
  const subscription = Meteor.subscribe('transactions.view', transactionId);

  if (subscription.ready()) {
    const transaction = Transactions.findOne(transactionId);
    onData(null, { transaction });
  }
}, ViewTransaction);

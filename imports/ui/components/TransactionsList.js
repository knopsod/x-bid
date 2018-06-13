import React from 'react';
import PropTypes from 'prop-types';
import { browserHistory } from 'react-router';
import { ListGroup, ListGroupItem, Alert } from 'react-bootstrap';
import { Meteor } from 'meteor/meteor';
import Transactions from '../../api/transactions/transactions';
import container from '../../modules/container';

const handleNav = _id => browserHistory.push(`/transactions/${_id}`);

const TransactionsList = ({ transactions }) => (
  transactions.length > 0 ? <ListGroup className="TransactionsList">
    {transactions.map(({ _id, client_transaction_id }) => (
      <ListGroupItem key={_id} onClick={ () => handleNav(_id) }>
        { client_transaction_id }
      </ListGroupItem>
    ))}
  </ListGroup> :
  <Alert bsStyle="warning">No transactions yet.</Alert>
);

TransactionsList.propTypes = {
  transactions: PropTypes.array,
};

export default container((props, onData) => {
  const subscription = Meteor.subscribe('transactions.list');
  if (subscription.ready()) {
    const transactions = Transactions.find().fetch();
    onData(null, { transactions });
  }
}, TransactionsList);

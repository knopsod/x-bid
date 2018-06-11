import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import Transactions from '../../api/transactions/transactions';
import TransactionEditor from '../components/TransactionEditor';
import NotFound from './NotFound';
import container from '../../modules/container';

const EditTransaction = ({ transaction }) => (transaction ? (
  <div className="EditTransaction">
    <h4 className="page-header">Editing "{ transaction.orderId }"</h4>
    <TransactionEditor transaction={ transaction } />
  </div>
) : <NotFound />);

EditTransaction.propTypes = {
  transaction: PropTypes.object,
};

export default container((props, onData) => {
  const transactionId = props.params._id;
  const subscription = Meteor.subscribe('transactions.view', transactionId);

  if (subscription.ready()) {
    const transaction = Transactions.findOne(transactionId);
    onData(null, { transaction });
  }
}, EditTransaction);

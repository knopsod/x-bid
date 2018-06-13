/* eslint-disable no-undef */

import { browserHistory } from 'react-router';
import { Bert } from 'meteor/themeteorchef:bert';
import { upsertTransaction } from '../api/transactions/methods.js';
import './validation.js';

let component;

const handleUpsert = () => {
  const { transaction } = component.props;
  const confirmation = transaction && transaction._id ? 'Transaction updated!' : 'Transaction added!';
  const upsert = {
    amount: document.querySelector('[name="amount"]').value.trim(),
    client_transaction_id: document.querySelector('[name="client_transaction_id"]').value.trim(),
  };

  if (transaction && transaction._id) upsert._id = transaction._id;

  upsertTransaction.call(upsert, (error, response) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      component.transactionEditorForm.reset();
      Bert.alert(confirmation, 'success');
      browserHistory.push(`/transactions/${response.insertedId || transaction._id}`);
    }
  });
};

const validate = () => {
  $(component.transactionEditorForm).validate({
    rules: {
      client_transaction_id: {
        required: true,
      },
      amount: {
        required: true,
      },
    },
    messages: {
      client_transaction_id: {
        required: 'Need Transaction ID',
      },
      amount: {
        required: 'Need Amount',
      },
    },
    submitHandler() { handleUpsert(); }
  });
};

export default function TransactionEditor(options) {
  component = options.component;
  validate();
}

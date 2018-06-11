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
    orderId: document.querySelector('[name="orderId"]').value.trim(),
    bank: document.querySelector('[name="bank"]').value.trim(),
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
      orderId: {
        required: true,
      },
      bank: {
        required: true,
      },
    },
    messages: {
      orderId: {
        required: 'Need Order ID',
      },
      bank: {
        required: 'Need Bank',
      },
    },
    submitHandler() { handleUpsert(); }
  });
};

export default function TransactionEditor(options) {
  component = options.component;
  validate();
}

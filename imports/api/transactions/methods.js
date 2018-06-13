import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Transactions from './transactions';
import rateLimit from '../../modules/rate-limit.js';

export const upsertTransaction = new ValidatedMethod({
  name: 'transactions.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    client_url: { type: String, optional: true },
    client_rest_api_endpoint: { type: String, optional: true },
    bank_account: { type: String, optional: true },
    bank_no: { type: String, optional: true },
    bank_name: { type: String, optional: true },
    bank_short_name: { type: String, optional: true },
    transfer_type: { type: String, optional: true },
    amount: { type: String, optional: true },
    transferred_datetime: { type: String, optional: true },
    transfer_detail: { type: String, optional: true },
    is_approved: { type: Boolean, optional: true },
    createdAt: { type: String, optional: true },
    creatorId: { type: String, optional: true },
    client_transaction_id: { type: String, optional: true },
    remoteAddress: { type: String, optional: true },
  }).validator(),
  run(transaction) {
    return Transactions.upsert({ _id: transaction._id }, { $set: transaction });
  },
});

export const removeTransaction = new ValidatedMethod({
  name: 'transactions.remove',
  validate: new SimpleSchema({
    _id: { type: String },
  }).validator(),
  run({ _id }) {
    Transactions.remove(_id);
  },
});

rateLimit({
  methods: [
    upsertTransaction,
    removeTransaction,
  ],
  limit: 5,
  timeRange: 1000,
});

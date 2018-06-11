import SimpleSchema from 'simpl-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import Transactions from './transactions';
import rateLimit from '../../modules/rate-limit.js';

export const upsertTransaction = new ValidatedMethod({
  name: 'transactions.upsert',
  validate: new SimpleSchema({
    _id: { type: String, optional: true },
    orderId: { type: String, optional: true },
    bank: { type: String, optional: true },
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

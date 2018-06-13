import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { Factory } from 'meteor/dburles:factory';

const Transactions = new Mongo.Collection('Transactions');
export default Transactions;

Transactions.allow({
  insert: () => false,
  update: () => false,
  remove: () => false,
});

Transactions.deny({
  insert: () => true,
  update: () => true,
  remove: () => true,
});

Transactions.schema = new SimpleSchema({
  client_url: {
    type: String,
    label: 'The client url',
    optional: true,
  },
  client_rest_api_endpoint: {
    type: String,
    label: 'The client rest api endpoint',
    optional: true,
  },
  bank_account: {
    type: String,
    label: 'The bank account',
    optional: true,
  },
  bank_no: {
    type: String,
    label: 'The bank no',
    optional: true,
  },
  bank_name: {
    type: String,
    label: 'The bank name',
    optional: true,
  },
  bank_short_name: {
    type: String,
    label: 'The bank short name',
    optional: true,
  },
  transfer_type: {
    type: String,
    label: 'The transfer type',
    optional: true,
  },
  amount: {
    type: String,
    label: 'The amount',
    optional: true,
  },
  transferred_datetime: {
    type: String,
    label: 'The transferred datetime',
    optional: true,
  },
  transfer_detail: {
    type: String,
    label: 'The transfer detail',
    optional: true,
  },
  is_approved: {
    type: Boolean,
    label: 'The is approved',
    optional: true,
  },
  createdAt: {
    type: String,
    label: 'The created at',
    optional: true,
  },
  creatorId: {
    type: String,
    label: 'The creator id',
    optional: true,
  },
  client_transaction_id: {
    type: String,
    label: 'The client transaciton id',
    optional: true,
  },
  remoteAddress: {
    type: String,
    label: 'The remote address',
    optional: true,
  },
});

Transactions.attachSchema(Transactions.schema);

Factory.define('transaction', Transactions, {
  client_url: () => 'Factory client url',
  client_rest_api_endpoint: () => 'Factory client rest api endpoint',
  bank_account: () => 'Factory bank account',
  bank_no: () => 'Factory bank no',
  bank_name: () => 'Factory bank name',
  bank_short_name: () => 'Factory bank short name',
  transfer_type: () => 'Factory transfer type',
  amount: () => 'Factory amount',
  transferred_datetime: () => 'Factory transferred datetime',
  transfer_detail: () => 'Factory transfer detail',
  is_approved: () => 'Factory is approved',
  createdAt: () => 'Factory created at',
  creatorId: () => 'Factory creator id',
  client_transaction_id: () => 'Factory client transaction id',
  remoteAddress: () => 'Factory remote address',
});

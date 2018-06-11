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
  orderId: {
    type: String,
    label: 'The order id',
  },
  bank: {
    type: String,
    label: 'The Bank',
  },
});

Transactions.attachSchema(Transactions.schema);

Factory.define('transaction', Transactions, {
  orderId: () => 'Factory Order ID',
  bank: () => 'Factory Bank',
});

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import Transactions from '../transactions';

Meteor.publish('transactions.list', () => Transactions.find());

Meteor.publish('transactions.view', (_id) => {
  check(_id, String);
  return Transactions.find(_id);
});

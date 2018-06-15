/* eslint-disable max-len */

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Meteor } from 'meteor/meteor';
import App from '../../ui/layouts/App.js';
import Documents from '../../ui/pages/Documents.js';
import NewDocument from '../../ui/pages/NewDocument.js';
import EditDocument from '../../ui/pages/EditDocument.js';
import ViewDocument from '../../ui/pages/ViewDocument.js';
import Index from '../../ui/pages/Index.js';
import Login from '../../ui/pages/Login.js';
import NotFound from '../../ui/pages/NotFound.js';
import RecoverPassword from '../../ui/pages/RecoverPassword.js';
import ResetPassword from '../../ui/pages/ResetPassword.js';
import Signup from '../../ui/pages/Signup.js';

import Transactions from '../../ui/pages/Transactions.js';
import NewTransaction from '../../ui/pages/NewTransaction.js';
import EditTransaction from '../../ui/pages/EditTransaction.js';
import ViewTransaction from '../../ui/pages/ViewTransaction.js';

import Sale from '../../ui/pages/sale/Sale.js';
import Sell from '../../ui/pages/sale/Sell.js';
import SaleDeposit from '../../ui/pages/sale/Deposit.js';
import SaleWithdraw from '../../ui/pages/sale/Withdraw.js';
import SaleWin from '../../ui/pages/sale/Win.js';
import SaleLost from '../../ui/pages/sale/Lost.js';
import SaleSummary from '../../ui/pages/sale/Summary.js';

import Buyer from '../../ui/pages/buyer/Buyer.js';
import Buy from '../../ui/pages/buyer/Buy.js';
import BuyerDeposit from '../../ui/pages/buyer/Deposit.js';
import BuyerWithdraw from '../../ui/pages/buyer/Withdraw.js';
import BuyerWin from '../../ui/pages/buyer/Win.js';
import BuyerLost from '../../ui/pages/buyer/Lost.js';
import BuyerSummary from '../../ui/pages/buyer/Summary.js';

const authenticate = (nextState, replace) => {
  if (!Meteor.loggingIn() && !Meteor.userId()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname },
    });
  }
};

Meteor.startup(() => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={ App }>
        <IndexRoute name="index" component={ Index } />
        <Route name="documents" path="/documents" component={ Documents } onEnter={ authenticate } />
        <Route name="newDocument" path="/documents/new" component={ NewDocument } onEnter={ authenticate } />
        <Route name="editDocument" path="/documents/:_id/edit" component={ EditDocument } onEnter={ authenticate } />
        <Route name="viewDocument" path="/documents/:_id" component={ ViewDocument } onEnter={ authenticate } />
        <Route name="transactions" path="/transactions" component={ Transactions } onEnter={ authenticate } />
        <Route name="newTransaction" path="/transactions/new" component={ NewTransaction } onEnter={ authenticate } />
        <Route name="editTransaction" path="/transactions/:_id/edit" component={ EditTransaction } onEnter={ authenticate } />
        <Route name="viewTransaction" path="/transactions/:_id" component={ ViewTransaction } onEnter={ authenticate } />

        <Route name="sale" path="/sale" component={ Sale } onEnter={ authenticate } />
        <Route name="sell" path="/sale/sell" component={ Sell } onEnter={ authenticate } />
        <Route name="saleDeposit" path="/sale/deposit" component={ SaleDeposit } onEnter={ authenticate } />
        <Route name="saleWithdraw" path="/sale/withdraw" component={ SaleWithdraw } onEnter={ authenticate } />
        <Route name="saleWin" path="/sale/win" component={ SaleWin } onEnter={ authenticate } />
        <Route name="saleLost" path="/sale/lost" component={ SaleLost } onEnter={ authenticate } />
        <Route name="saleSummary" path="/sale/summary" component={ SaleSummary } onEnter={ authenticate } />

        <Route name="buyer" path="/buyer" component={ Buyer } onEnter={ authenticate } />
        <Route name="buy" path="/buyer/buy" component={ Buy } onEnter={ authenticate } />
        <Route name="buyerDeposit" path="/buyer/deposit" component={ BuyerDeposit } onEnter={ authenticate } />
        <Route name="buyerWithdraw" path="/buyer/withdraw" component={ BuyerWithdraw } onEnter={ authenticate } />
        <Route name="buyerWin" path="/buyer/win" component={ BuyerWin } onEnter={ authenticate } />
        <Route name="buyerLost" path="/buyer/lost" component={ BuyerLost } onEnter={ authenticate } />
        <Route name="buyerSummary" path="/buyer/summary" component={ BuyerSummary } onEnter={ authenticate } />

        <Route name="login" path="/login" component={ Login } />
        <Route name="recover-password" path="/recover-password" component={ RecoverPassword } />
        <Route name="reset-password" path="/reset-password/:token" component={ ResetPassword } />
        <Route name="signup" path="/signup" component={ Signup } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>,
    document.getElementById('react-root'),
  );
});

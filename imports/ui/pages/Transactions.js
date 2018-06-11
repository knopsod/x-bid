import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Button } from 'react-bootstrap';
import TransactionsList from '../components/TransactionsList';

const Transactions = () => (
  <div className="Transactions">
    <Row>
      <Col xs={ 12 }>
        <div className="page-header clearfix">
          <h4 className="pull-left">Transactions</h4>
          <Link to="/transactions/new">
            <Button
              bsStyle="success"
              className="pull-right"
              >New Transaction</Button>
          </Link>
        </div>
        <TransactionsList />
      </Col>
    </Row>
  </div>
);

export default Transactions;

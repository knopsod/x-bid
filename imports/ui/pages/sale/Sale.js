import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

const sale = () => (
  <div>
    <p>
      <h4>
        <Link to="/">X-BID</Link>{ ' > Sale' }
      </h4>
    </p>
    <div className="text-center">
      <h4>ID : ######</h4>
      <hr />
      <p>
        <Link to="/sale/sell">
          <Button className="btn btn-success" style={{ width: '100%' }}
            bsSize="large"
            >Sell</Button>
        </Link>
      </p>
      <hr />
      <p>
        <Link to="/sale/deposit">
          <Button className="btn btn-success" style={{ width: '100%' }}
            bsSize="large"
            >Deposit</Button>
        </Link>
      </p>
      <p>
        <Link to="/sale/withdraw">
          <Button className="btn btn-success" style={{ width: '100%' }}
            bsSize="large"
            >Withdraw</Button>
        </Link>
      </p>
      <hr />
      <p>
        <Link to="/sale/win">
          <Button className="btn btn-success" style={{ width: '100%' }}
            bsSize="large"
            >Win</Button>
        </Link>
      </p>
      <p>
        <Link to="/sale/lost">
          <Button className="btn btn-success" style={{ width: '100%' }}
            bsSize="large"
            >Lost</Button>
        </Link>
      </p>
      <hr />
      <p>
        <Link to="/sale/summary">
          <Button className="btn btn-success" style={{ width: '100%' }}
            bsSize="large"
            >Summary</Button>
        </Link>
      </p>
    </div>

  </div>
);

export default sale;

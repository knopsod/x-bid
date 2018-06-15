import React from 'react';
import { Link } from 'react-router';
import { Button } from 'react-bootstrap';

const buyer = () => (
  <div>
    <p>
      <h4>
        <Link to="/">X-NO</Link>{ ' > Buyer' }
      </h4>
    </p>
    <div className="text-center">
      <h4>ID : ######</h4>
      <hr />
      <p>
        <Link to="/buyer/buy">
          <Button className="btn btn-success" style={{ width: '100%' }}
            bsSize="large"
            >Buy</Button>
        </Link>
      </p>
      <hr />
      <p>
        <Link to="/buyer/deposit">
          <Button className="btn btn-success" style={{ width: '100%' }}
            bsSize="large"
            >Deposit</Button>
        </Link>
      </p>
      <p>
        <Link to="/buyer/withdraw">
          <Button className="btn btn-success" style={{ width: '100%' }}
            bsSize="large"
            >Withdraw</Button>
        </Link>
      </p>
      <hr />
      <p>
        <Link to="/buyer/win">
          <Button className="btn btn-success" style={{ width: '100%' }}
            bsSize="large"
            >Win</Button>
        </Link>
      </p>
      <p>
        <Link to="/buyer/lost">
          <Button className="btn btn-success" style={{ width: '100%' }}
            bsSize="large"
            >Lost</Button>
        </Link>
      </p>
      <hr />
      <p>
        <Link to="/buyer/summary">
          <Button className="btn btn-success" style={{ width: '100%' }}
            bsSize="large"
            >Summary</Button>
        </Link>
      </p>
    </div>

  </div>
);

export default buyer;

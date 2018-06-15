import React from 'react';
import { Link } from 'react-router';

const fileName = () => (
  <div>
    <p>
      <h4>
        <Link to="/">X-BID</Link>
        { ' > '}
        <Link to ="/sale">Sale</Link>
        { ' > Withdraw' }
      </h4>
    </p>
    <div className="text-center">
      <h4>ID : ######</h4>
      <hr />
    </div>
  </div>
);

export default fileName;

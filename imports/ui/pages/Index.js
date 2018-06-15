import React from 'react';
import { Jumbotron, Button, ButtonToolbar } from 'react-bootstrap';
import { Link } from 'react-router';

const Index = () => (
  <div className="Index">
    <Jumbotron className="text-center">
      <h2>X-BID</h2>
      <p>Project</p>
      <p>
        <Link to="/sale">
          <Button className="btn btn-success" style={{ width: '100%' }}
            bsSize="large"
            >Sale</Button>
        </Link>
      </p>
      <hr />
      <p>
        <Link to="/buyer">
          <Button className="btn btn-success" style={{ width: '100%' }}
            bsSize="large"
            >Buyer</Button>
        </Link>
      </p>

      <p style={ { fontSize: '16px', color: '#aaa' } }>ver. mock-up</p>
    </Jumbotron>
  </div>
);

export default Index;

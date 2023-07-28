import * as React from 'react';
import { Link } from 'react-router-dom';
import './index.less';

function NoMatch() {
  return (
    <div className="no-match">
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

export default NoMatch;

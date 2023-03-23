import PropTypes from 'prop-types';

import Header from '../component/Header';

function HeaderOnly({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
HeaderOnly.prototype={
  children:PropTypes.node.isRequired
}
export default HeaderOnly;

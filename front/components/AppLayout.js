import React from 'react';
import ProTypes from 'prop-types';

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>공통메뉴</div>
      {children}
    </div>
  );
};

AppLayout.proTypes = {
  children: ProTypes.node.isRequired,
};

export default AppLayout;

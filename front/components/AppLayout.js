import React from 'react';
import ProTypes from 'prop-types';
import Link from 'next/link';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Link href="/" legacyBehavior>
        <a>nodebird</a>
      </Link>
      <Link href="/profile" legacyBehavior>
        <a>프로필</a>
      </Link>
      <Link href="/signup" legacyBehavior>
        <a>회원가입</a>
      </Link>
      {children}
    </div>
  );
};

AppLayout.proTypes = {
  children: ProTypes.node.isRequired,
};

export default AppLayout;

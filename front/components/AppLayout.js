import React from 'react';
import ProTypes from 'prop-types';
import Link from 'next/link';
import { Menu } from 'antd';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/" legacyBehavior>
            <a>nodebird</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile" legacyBehavior>
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup" legacyBehavior>
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      {children}
    </div>
  );
};

AppLayout.proTypes = {
  children: ProTypes.node.isRequired,
};

export default AppLayout;

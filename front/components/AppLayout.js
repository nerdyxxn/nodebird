import React from 'react';
import ProTypes from 'prop-types';
import Link from 'next/link';
import { Input, Menu, Row, Col } from 'antd';

const AppLayout = ({ children }) => {
  return (
    <div>
      <Menu
        mode="horizontal"
        items={[
          { label: <Link href="/">Nodebird</Link>, key: '/' },
          { label: <Link href="/profile">프로필</Link>, key: '/profile' },
          { label: <Input.Search enterButton />, key: '/search' },
          {
            label: <Link href="/signup">회원가입</Link>,
            key: '/signup',
          },
        ]}
      ></Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}></Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://github.com/nerdyxxn" target="_blank" rel="noreferrer noopener">
            Made my Nerdyxxn
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.proTypes = {
  children: ProTypes.node.isRequired,
};

export default AppLayout;

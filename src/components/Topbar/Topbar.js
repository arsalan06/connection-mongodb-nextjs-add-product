import React from "react";
const { Header } = Layout;
import { Breadcrumb, Layout, theme } from "antd";
const Topbar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <Header
        style={{
          padding: 0,
          background: colorBgContainer,
        }}
      >
        <Breadcrumb>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
      </Header>
    </div>
  );
};

export default Topbar;

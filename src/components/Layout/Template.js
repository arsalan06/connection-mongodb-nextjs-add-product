import React from "react";
const { Header, Content, Footer } = Layout;
import { Breadcrumb, Layout, theme } from "antd";
import Sidenav from "../Sidenav/Sidenav";
import Topbar from "../Topbar/Topbar";

const Template = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <Layout>
        <Sidenav />
        <Layout className="site-layout">
          <Topbar />
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              Bill is a cat.
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default Template;

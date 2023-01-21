import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
  SettingOutlined,
  LogoutOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Icon } from "antd";
import { useState } from "react";
import Link from "next/link";
import Image from "next/Image";
const { SubMenu } = Menu;
import styles from "@/styles/Sidenav.module.css";

const { Header, Content, Footer, Sider } = Layout;

const Sidenav = () => {
  const [collapsed, setCollapsed] = useState(true);
  const menuItems = [
    {
      key: "Dashboard",
      icon: <DashboardOutlined />,
      label: "Dashboard",
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "个人设置",
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "退出登录",
    },
  ];
  return (
    <Sider
      // collapsible
      className={styles.sider_container}
      //   collapsed={collapsed}
      //   onCollapse={(value) => setCollapsed(value)}
    >
      <div
        style={{
          width: "100%",
          height: "65px",
          marginBottom: "30px",
        }}
      >
        <Image src="/logo.png" alt="logo" width={180} height={65} />
      </div>
      <Menu items={menuItems} style={{
        
      }}/>
      {/* <Menu
        mode="inline"
        className={styles.menu_items_container}
        // defaultOpenKeys="home"
        defaultSelectedKeys={["home"]}
      >
        <Menu.Item
          className="no-border"
          key="home"
          //   defaultSelectedKeys={["home"]}
        >
          <Link href={"/"}>Dashboard</Link>
        </Menu.Item>
        <SubMenu key="submenu" title="number">
          <Menu.Item className="no-border" key="1">
            one
          </Menu.Item>
          <Menu.Item className="no-border" key="2">
            two
          </Menu.Item>
          <Menu.Item className="no-border" key="3">
            three
          </Menu.Item>
        </SubMenu>
        <Menu.Item className="no-border" key="11">
          one 1
        </Menu.Item>
        <Menu.Item className="no-border" key="21">
          two 1
        </Menu.Item>
        <Menu.Item className="no-border" key="31">
          three 1
        </Menu.Item>
      </Menu> */}
    </Sider>
  );
};
export default Sidenav;

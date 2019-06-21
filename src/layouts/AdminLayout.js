import React, { Component } from "react";
import { Layout, Menu, Icon } from 'antd';
import { Route, Switch, Redirect } from "react-router-dom";
import HomePageAdmin from '../pages/HomePageAdmin'

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class AdminLayout extends Component{
  render() {
    const { match } = this.props
  return (
    <Layout style={{minHeight: '100vh', background: '#fff'}}>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={200} style={{ background: '#fff'}}>
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub2']}
            style={{ height: '100%', borderRight: 0 }}
          >
            <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="user" />
                  Account
                </span>
              }
            >
              <Menu.Item key="1">option1</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={
                <span>
                  <Icon type="shop" />
                  Store
                </span>
              }
            >
              <Menu.Item key="1">Create Store</Menu.Item>
              <Menu.Item key="2">Orders</Menu.Item>
              <Menu.Item key="3">Sales</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ height: '100%' }}>
          <Content style={{ padding: 10, margin: 20 }}>
            <div 
              style={{ 
                width: '100%',
                background: '#fff',
                padding: 24,
                minHeight: '800'
              }}
            >
              <main>
                <Switch>
                  <Route path={`${match.path}`} exact component={HomePageAdmin} />
                  <Redirect to={`${match.url}`} />
                </Switch>
              </main>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Tienda un metro ©2019 Created by PadawanDev</Footer>
        </Layout>
      </Layout>
    </Layout>
  )}
}

export default AdminLayout
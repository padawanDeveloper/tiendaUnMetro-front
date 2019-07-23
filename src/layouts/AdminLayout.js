import React, { Component } from "react";
import { Layout, Menu, Icon } from 'antd';
import { Route, Switch, Redirect, Link } from "react-router-dom";
import HomePageAdmin from '../pages/admin/HomePageAdmin';
import ItemPageAdmin from '../pages/admin/ItemPageAdmin';
import NavBar from '../components/navBar/Navbar'

const { SubMenu } = Menu;
const { Header, Content, Sider, Footer } = Layout;

class AdminLayout extends Component{

  state = {
    collapsed: false,
  }

  onCollapse = collapsed => {
    this.setState({ collapsed });
  }
  render() {
    const { match } = this.props
  return (
    <Layout style={{minHeight: '100vh'}}>
        <Sider collapsible width={200} onCollapse={this.onCollapse} >
        <div style={{height: '32px', background: 'rgba(255, 255, 255, 0.2)', margin: '16px'}} />
          <Menu
            mode="inline"
            theme="dark"
            defaultSelectedKeys={['0']}
            defaultOpenKeys={['sub2']}
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
              <Menu.Item key="0"><Link to={`${match.path}/`}>Create Store</Link></Menu.Item>
              <Menu.Item key="1"><Link to={`${match.path}/item`}>Create Item</Link></Menu.Item>
              <Menu.Item key="2">Orders</Menu.Item>
              <Menu.Item key="3">Sales</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ height: '100%' }}>
          <Header style={{background: '#fff'}}>
            <NavBar />
          </Header>
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
                  <Route path={`${match.path}/item`} exact component={ItemPageAdmin} />
                  <Redirect to={`${match.url}`} />
                </Switch>
              </main>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Tienda un metro ©2019 Created by PadawanDev</Footer>
        </Layout>
      </Layout>
  )}
}

export default AdminLayout
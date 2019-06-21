import React from 'react';
import { Layout } from 'antd';
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from '../components/navBar/Navbar'
import HomePage from '../pages/HomePage'

const { Header, Content, Footer } = Layout;

const  UserLayout = ({ match }) => (
  <Layout style={{minHeight: '100vh', background: '#fff'}} >
    <Header style={{background: '#fff'}}>
      <NavBar />
    </Header>
    <Content style={{ padding: 10, margin: 20, display: 'flex', background: '#fff' }}>
      <div 
        style={{ 
          width: '100%',
          background: '#fff',
          padding: 24,
          minHeight: 280
        }}
      >
        <main>
          <Switch>
            <Route path={`${match.path}`} exact component={HomePage} />
            <Redirect to={`${match.url}`} />
          </Switch>
        </main>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Tienda un metro ©2019 Created by PadawanDev</Footer>
  </Layout>
)

export default UserLayout
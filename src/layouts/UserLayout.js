import React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from "react-router-dom";
import NavBar from '../components/navBar/Navbar'
import HomePage from '../pages/HomePage'
import SimpleStore from '../components/store/SimpleStore'
import SigninPage from '../pages/SiginPage'
import Cart from '../components/cart/Cart'

const { Header, Content, Footer } = Layout;

const PageNotFound = () => (<div><h1>PageNotFound</h1></div> )

const  UserLayout = ({ match, me }) => (
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
            <Route path={`${match.url}`} exact component={props => <HomePage {...props}/>} />
            <Route path={`${match.url}/store/:id`} exact component={SimpleStore} />
            <Route path={`${match.url}/item/:id`} exact component={SimpleStore} />
            <Route path={`${match.url}/signin`} exact component={SigninPage} />
            <Route path={`${match.url}/cart`} exact component={props => <Cart {...props} cart={me.cart}/>} />
            <Route component={PageNotFound} />
          </Switch>
        </main>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Tienda un metro ©2019 Created by PadawanDev</Footer>
  </Layout>
)

export default UserLayout
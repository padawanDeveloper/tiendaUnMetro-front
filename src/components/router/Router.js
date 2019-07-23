import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from './PrivateRoute'
import UserLayout from '../../layouts/UserLayout'
import AdminLayout from '../../layouts/AdminLayout'
import User from '../common/User'

const Router = () => {
  return (
    <BrowserRouter >
      <User>
        {({ data: { me }, loading }) => {
          if(loading) return <h1>Loading...</h1>
          return (
          <Switch>
            <Route path="/app" component={ porps => <UserLayout me={me} {...porps} />} />
            {me && me.permissions[0] === 'USER' ? 
              <PrivateRoute path="/admin" component={porps => <AdminLayout me={me} {...porps} />} /> 
              : <Redirect to="/app" />
            }
            <Redirect to="/app" />
          </Switch>
        )}}
      </User>
    </BrowserRouter>
  );
}

export default Router
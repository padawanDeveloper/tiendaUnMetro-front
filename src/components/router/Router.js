import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from './PrivateRoute'
import UserLayout from '../../layouts/UserLayout'
import AdminLayout from '../../layouts/AdminLayout'
import User from '../common/User'

const PageNotFound = () => (<div><h1>PageNotFound</h1></div> )

const Router = () => {
  return (
    <BrowserRouter >
      <User>
        {({ data: { me }, loading }) => {
          if(loading) return <h1>Loading...</h1>
          return (
          <Switch>
            <Route exact path="/" component={UserLayout} />
            {me && me.permissions[0] === 'USER' ? 
              <PrivateRoute exact path="/admin" component={AdminLayout}  /> 
              : <Redirect to='/' />
            }
            <Route component={PageNotFound}/>
          </Switch>
        )}}
      </User>
    </BrowserRouter>
  );
}

export default Router
import React from "react";
import { Redirect, Route } from "react-router-dom";
import { Query } from 'react-apollo';
import { CURRENT_USER_QUERY } from "../common/User";

const PrivateRoute = ({ client, component: Component, exact, path }) => {
    return (
      <Query query={CURRENT_USER_QUERY}>
      {({loading, data, error}) => (
        data ? 
        <Route
          exact={exact}
          path={path}
          render={props => <Component {...props} user={data} />}
        /> : <Redirect to="/" />
      )}
      </Query>
    );
};
export default PrivateRoute;
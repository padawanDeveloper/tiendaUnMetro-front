import React from "react";
import { Route } from "react-router-dom";

const PublicRoute = ({ component: Component, exact, path}) => {
    return (
      <Route
        exact={exact}
        path={path}
        render={props => <Component {...props} />}
      />
    );
};

export default PublicRoute;
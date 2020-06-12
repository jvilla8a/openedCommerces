import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import PropTypes from "prop-types";

import routes from "./config/lazyLoadRegistry";

const validate = (isAuthenticated, route) => {
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...(route.path
        ? { exact: true, path: route.route, isAuthenticated }
        : {})}
      component={route.lazy ? Loadable(route.moduleName) : route.moduleName}
      key={route.name}
    />
  );
};

const mapping = (isAuthenticated) =>
  routes.map((route) => validate(isAuthenticated, route));

const Routes = ({ isAuthenticated }) => (
  <Switch>{mapping(isAuthenticated)}</Switch>
);

export default Routes;

Routes.propTypes = {
  isAuthenticated: PropTypes.bool,
};

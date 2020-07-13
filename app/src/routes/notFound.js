import React from "react";
import { withRouter, Redirect } from "react-router-dom";

const NotFound = () => <Redirect to="/registro" />;

export default withRouter(NotFound);

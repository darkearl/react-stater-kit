import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "../store";

// import component for route
import App from "../components/App";
import Home from "../components/Home";
import Login from "../components/Login";
import RequireAuthentication from "../components/RequireAuthentication";
import NotFound from "../components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
    	<Route path="login" component={Login}/>
		  <Route component={RequireAuthentication}>
		    <IndexRoute component={Home}/>
    		<Route path="home" component={Home}/>

		  </Route>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export default router;
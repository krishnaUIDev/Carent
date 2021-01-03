import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import ContactUs from "./Components/ContactUs";
import Details from "./Components/Details";
import Home from "./Components/Home";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

const RouteConfig = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/contactUs" component={ContactUs} />
      <Route exact path="/signIn" component={SignIn} />
      <Route exact path="/signUp" component={SignUp} />
      <Route
        exact
        path="/:details"
        render={(props) => <Details {...props} />}
      />
    </Switch>
  );
};

export default RouteConfig;

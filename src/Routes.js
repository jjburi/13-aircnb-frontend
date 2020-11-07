import React, { Fragment } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import HomeBooking from "./Pages/HomeBooking/HomeBooking";
import HomeDetails from "./Pages/HomeDetails/HomeDetails";
import HomeList from "./Pages/HomeList/HomeList";
import Main from "./Pages/Main/Main";
import Nav from "./Pages/Nav/Nav";

import { ThemeProvider } from "styled-components";
import GlobalStyle from "./Styles/GlobalStyle";
import theme from "./Styles/Theme";

const Routes = () => {
  return (
    <Fragment>
      <Router>
        <Switch>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Route exact path="/nav" component={Nav} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/homebooking" component={HomeBooking} />
            <Route exact path="/homedetails" component={HomeDetails} />
            <Route exact path="/homelist" component={HomeList} />
          </ThemeProvider>
        </Switch>
      </Router>
    </Fragment>
  );
};

export default Routes;

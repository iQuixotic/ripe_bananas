import React from "react";
import "../include/bootstrap";
import "./main.css";
import { Provider } from "react-redux";
import { store } from "../redux/Store";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import { Nav } from "../components";
import {
  SomethingWentWrongPg,
  SingleReviewPg,
  SearchResults,
  ProfilePg,
  HomePg
} from "../containers";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={HomePg} />
          {/* <Route exact path="/review" component={SingleReviewPg} />           */}
          <Route path="/review/:title/:year" component={SingleReviewPg} />
          {/* /:movieTitle */}
          <Route exact path="/results" component={SearchResults} />
          <Route exact path="/profile" component={ProfilePg} />
          <Route exact path="/home/404" component={SomethingWentWrongPg} />
          <Redirect from="/*" to="/home/404" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default App;

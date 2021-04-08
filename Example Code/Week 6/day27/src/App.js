import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import UserRoute from "./components/routing/UserRoute";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import SignIn from "./components/auth/SignIn";
import Transactions from "./components/transactions/Transactions";
import Transaction from "./components/transactions/Transaction";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <UserRoute exact path="/" component={Transactions} />
            <Route exact path="/signin" component={SignIn} />
            <UserRoute exact path="/:id" component={Transaction} />
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;

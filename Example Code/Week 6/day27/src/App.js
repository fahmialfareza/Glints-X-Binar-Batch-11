import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
// import './App.css';
import Header from "./components/layouts/Header";
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
            <Route exact path="/" component={Transactions} />
            <Route exact path="/:id" component={Transaction} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;

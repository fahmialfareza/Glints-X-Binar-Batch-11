import { Fragment } from 'react';
import logo from "./logo.svg";
// import './App.css';
import Header from "./components/layouts/Header";
import Transactions from "./components/transactions/Transactions";

function App() {
  return (
    <Fragment>
      <Header />
      <Transactions />
    </Fragment>
  );
}

export default App;

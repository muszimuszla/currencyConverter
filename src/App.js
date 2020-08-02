import React from "react";
import ExchangeRate from "./components/ExchangeRate";
import TransactionTop from "./components/TransactionsTop";
import TransactionsAll from "./components/TransactionsAll";

function App() {
  return (
    <React.Fragment>
      <div className="mobile">
        <h2> That page isn't ready for mobile yet :) </h2>
      </div>
      <div className="main-container">
        <div className="main-container__left">
          <ExchangeRate />
          <TransactionTop />
        </div>
        <div className="main-container__right">
          <TransactionsAll />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

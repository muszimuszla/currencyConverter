import React, { Component } from "react";
import { connect } from "react-redux";

export class TransactionsTop extends Component {
  render() {
    function calculatePLN(euro, rate) {
      return (euro * rate).toFixed(2);
    }

    function calculateEURO(euro) {
      return (euro * 1).toFixed(2);
    }

    var topTransaction = { title: "", euro: 0 };
    this.props.transactions.forEach((transaction) => {
      if (parseInt(transaction.euro, 10) > topTransaction.euro) {
        topTransaction.title = transaction.title;
        topTransaction.euro = transaction.euro;
      }
    });

    return (
      <React.Fragment>
        <div className="top-transaction">
          <p id="top">TOP</p>
          <p> {topTransaction.title} </p>
          <div className="top-transaction__value">
            <p> {calculateEURO(topTransaction.euro)} EUR </p>
            <p>{calculatePLN(topTransaction.euro, this.props.rate)} PLN</p>{" "}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    transactions: state.transactions,
    rate: state.rate,
  };
};

export default connect(mapStateToProps, null)(TransactionsTop);

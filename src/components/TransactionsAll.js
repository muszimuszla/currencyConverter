import React, { Component } from "react";
import { connect } from "react-redux";
import { removeTransaction } from "../redux/actions";
import TransactionsAdd from "./TransactionsAdd";
import TransactionsSum from "./TransactionsSum";

export class TransactionsAll extends Component {
  render() {
    function calculatePLN(euro, rate) {
      return (euro * rate).toFixed(2);
    }

    function calculateEURO(euro) {
      return (euro * 1).toFixed(2);
    }

    const transactionsItems = this.props.transactions.map(
      (transaction, index) => (
        <div key={index} className="transactions__item">
          <p id="title">{transaction.title}</p>
          <p id="EUR">{calculateEURO(transaction.euro)}€</p>
          <p id="PLN">{calculatePLN(transaction.euro, this.props.rate)}zł</p>
          <button
            className="delete"
            onClick={() =>
              this.props.removeTransaction(index, transaction.euro)
            }
          >
            X
          </button>
        </div>
      )
    );

    return (
      <React.Fragment>
        <div className="transactions">
          <TransactionsAdd />
          <div className="transactions__items">{transactionsItems}</div>
          <TransactionsSum />
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

const mapDispatchToProprs = {
  removeTransaction: removeTransaction,
};

export default connect(mapStateToProps, mapDispatchToProprs)(TransactionsAll);

import React, { Component } from "react";
import { connect } from "react-redux";

export class TransactionsSum extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="sum">
          <p id="EUR">{this.props.sum.toFixed(2)}€</p>
          <p id="PLN">{(this.props.sum * this.props.rate).toFixed(2)}zł</p>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rate: state.rate,
    sum: state.sum,
  };
};

export default connect(mapStateToProps, null)(TransactionsSum);

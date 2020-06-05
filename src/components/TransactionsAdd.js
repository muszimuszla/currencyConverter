import React, { Component } from "react";
import { connect } from "react-redux";
import { addTransaction, addToSum } from "../redux/actions";

export class TransactionsAdd extends Component {
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmission = (e) => {
    e.preventDefault();

    let { title, euro } = this.state;
    this.props.addTransaction(title, euro);
    this.props.addToSum(euro * 1);

    document.getElementById("form").reset();
  };

  render() {
    return (
      <React.Fragment>
        <form id="form" onSubmit={this.handleSubmission}>
          <div className="add-form">
            <input
              id="title"
              placeholder="TRANSACTION TITLE"
              type="text"
              name="title"
              required
              onChange={this.handleChange}
            />
            <input
              id="EUR"
              placeholder="EUR"
              type="number"
              min="0"
              step="0.01"
              name="euro"
              required
              onChange={this.handleChange}
            />
            <button type="submit">
              <p>ADD</p>
            </button>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default connect(null, {
  addTransaction: addTransaction,
  addToSum: addToSum,
})(TransactionsAdd);

import React, { Component } from "react";
import { connect } from "react-redux";
import { changeExchangeRate } from "../redux/actions";

export class ExchangeRate extends Component {
  handleChange = (e) => {
    if (e.target.value >= 0) {
      this.props.changeExchangeRate(e.target.value);
    } else {
      e.target.value = "";
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="exchange-rate">
          <p>1 EUR = </p>
          <input
            type="number"
            value={this.props.rate}
            name="rate"
            onChange={this.handleChange}
            min="0"
            step="0.01"
          />
          <p>PLN </p>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rate: state.rate,
  };
};

const mapDispatchToProprs = {
  changeExchangeRate: changeExchangeRate,
};

export default connect(mapStateToProps, mapDispatchToProprs)(ExchangeRate);

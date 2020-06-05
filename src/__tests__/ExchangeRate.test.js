import React from "react";
import { shallow } from "enzyme";
import { ExchangeRate } from "../components/ExchangeRate";

let enzymeWrapper;
const changeExchangeRate = jest.fn();

function setup() {
  const props = {
    changeExchangeRate,
    rate: 4.4,
  };

  enzymeWrapper = shallow(<ExchangeRate {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe("Exchange Rate", () => {
  it("renders without crashing", () => {
    setup();
  });

  it("renders correctly", () => {
    expect(enzymeWrapper).toMatchSnapshot();
  });

  it("input renders correct exchange rate value", () => {
    const tmp = setup();
    expect(enzymeWrapper.find('input[type="number"]').props().value).toBe(
      tmp.props.rate
    );
  });

  it("input change rendered value", () => {
    const mockEvent = { target: { value: 12.3 } };
    enzymeWrapper.find('input[type="number"]').simulate("change", mockEvent);
    expect(changeExchangeRate).toHaveBeenCalledWith(12.3);
    changeExchangeRate.mockClear();
  });

  it("input accepts only digits", () => {
    const mockEvent = { target: { value: "abc" } };
    enzymeWrapper.find('input[type="number"]').simulate("change", mockEvent);
    expect(changeExchangeRate).toHaveBeenCalledTimes(0);
    changeExchangeRate.mockClear();
  });
});

import React from "react";
import { shallow } from "enzyme";
import { TransactionsSum } from "../components/TransactionsSum";

let enzymeWrapper;

function setup() {
  const props = {
    sum: 610.95,
    rate: 4.4,
  };

  enzymeWrapper = shallow(<TransactionsSum {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe("Transactions Sum", () => {
  it("renders without crashing", () => {
    setup();
  });

  it("renders correctly", () => {
    expect(enzymeWrapper).toMatchSnapshot();
  });

  it("renders correct sum value", () => {
    expect(enzymeWrapper.find("p").at(0).text()).toEqual("610.95€");
  });

  it("correctly calculates PLN value", () => {
    expect(enzymeWrapper.find("p").at(1).text()).toEqual("2688.18zł");
  });
});

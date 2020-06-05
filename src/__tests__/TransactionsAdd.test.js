import React from "react";
import { shallow } from "enzyme";
import { TransactionsAdd } from "../components/TransactionsAdd";

let enzymeWrapper;

function setup() {
  const props = {};

  enzymeWrapper = shallow(<TransactionsAdd {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe("Transactions Add", () => {
  it("renders without crashing", () => {
    setup();
  });

  it("renders correctly", () => {
    expect(enzymeWrapper).toMatchSnapshot();
  });
});

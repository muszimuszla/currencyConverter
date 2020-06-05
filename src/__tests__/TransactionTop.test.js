import React from "react";
import { shallow } from "enzyme";
import { TransactionsTop } from "../components/TransactionsTop";

let enzymeWrapper;

function setup() {
  const props = {
    transactions: [
      { title: "Transaction no. 2514526586", euro: 35.2 },
      { title: "Transaction no. 4875148695", euro: 44.5 },
      { title: "Transaction no. 5248625931", euro: 120.25 },
      { title: "Transaction no. 9623584158", euro: 50 },
      { title: "Transaction no. 3675481259", euro: 150 },
      { title: "Transaction no. 9624851593", euro: 26 },
      { title: "Transaction no. 5481726983", euro: 185 },
    ],
    rate: 4.4,
  };

  enzymeWrapper = shallow(<TransactionsTop {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe("Transactions Top", () => {
  it("renders without crashing", () => {
    setup();
  });

  it("renders correctly", () => {
    expect(enzymeWrapper).toMatchSnapshot();
  });

  it("chooses proper top transaction", () => {
    expect(enzymeWrapper.text()).toContain("TOP");
    expect(enzymeWrapper.text()).toContain("5481726983");
    expect(enzymeWrapper.text()).toContain("185");
  });
});

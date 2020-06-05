import React from "react";
import { shallow } from "enzyme";
import { TransactionsAll } from "../components/TransactionsAll";

let enzymeWrapper;
const removeTransaction = jest.fn();

function setup() {
  const props = {
    removeTransaction,
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

  enzymeWrapper = shallow(<TransactionsAll {...props} />);

  return {
    props,
    enzymeWrapper,
  };
}

describe("Transactions All", () => {
  it("renders without crashing", () => {
    setup();
  });

  it("renders correctly", () => {
    expect(enzymeWrapper).toMatchSnapshot();
  });

  it("renders all transactions", () => {
    expect(enzymeWrapper.find(".transactions__item")).toHaveLength(7);
  });

  it("correctly calculates PLN value", () => {
    expect(enzymeWrapper.find(".transactions__item").at(2).text()).toContain(
      "529.10zł"
    );
    expect(enzymeWrapper.find(".transactions__item").at(5).text()).toContain(
      "114.40zł"
    );
  });

  it("button deletes choosen transaction", () => {
    enzymeWrapper.find("button").at(0).simulate("click");
    expect(removeTransaction).toHaveBeenCalledTimes(1);
    removeTransaction.mockClear();
  });
});

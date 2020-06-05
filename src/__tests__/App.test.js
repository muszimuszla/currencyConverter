import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("Main page", () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders correctly", () => {
    const enzymeWrapper = shallow(<App />);
    expect(enzymeWrapper).toMatchSnapshot();
  });
});

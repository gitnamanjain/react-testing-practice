import React from "react";
import { expect, assert } from "chai";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { shallow, configure } from "enzyme";
import Form from "../Form";

configure({ adapter: new Adapter() });
describe("Form testing component", () => {
  it("should exists", function () {
    assert.isDefined(Form);
  });
  it("Should contain input for first name", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find({ name: "firstName" })).to.have.lengthOf(1);
  });
  it("Should contain input for Last name", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find({ name: "lastName" })).to.have.lengthOf(1);
  });
  it("Should contain input for Address", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find({ name: "address1" })).to.have.lengthOf(1);
  });
  it("Should contain Submit Button", () => {
    const wrapper = shallow(<Form />);
    expect(wrapper.find("button").text()).to.be.equal("Submit");
  });
});

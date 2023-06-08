import { shallow } from "enzyme";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import React from "react";
import BadgeText from "../BadgeText";

describe("BadgeText:UI Test", () => {
  it("UI test", () => {
    const wrapper = shallow(<BadgeText />);
    expect(wrapper.find("span")).toHaveLength(2);
    expect(wrapper.find(".badgeBigText")).toHaveLength(1);
    expect(wrapper.find(".badge")).toHaveLength(1);
  });
  it("Action test", () => {
    const colorArray = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "cyan",
      "purple",
      "gray",
      "white",
      "light",
      "dark"
    ];
    colorArray.forEach(element => {
      const wrapper = shallow(<BadgeText color={element} />);
      expect(wrapper.find("." + element)).toHaveLength(1);
    });
  });
});

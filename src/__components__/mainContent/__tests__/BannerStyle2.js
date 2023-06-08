import { configure } from "enzyme";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import React from "react";
import BannerStyle2 from "../animationBanner/BannerStyle2";
describe("BannerStyle2:UI Test", () => {
  it("UI test", () => {
    const component = renderer.create(<BannerStyle2 />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

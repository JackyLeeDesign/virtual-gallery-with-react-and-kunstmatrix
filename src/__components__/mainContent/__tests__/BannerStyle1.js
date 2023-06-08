import { configure } from "enzyme";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import React from "react";
import BannerStyle1 from "../animationBanner/BannerStyle1";
describe("BannerStyle1:UI Test", () => {
  it("UI test", () => {
    const component = renderer.create(<BannerStyle1 />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

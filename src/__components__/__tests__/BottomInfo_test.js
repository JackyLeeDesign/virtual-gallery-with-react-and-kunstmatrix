import { configure } from "enzyme";
import renderer from "react-test-renderer";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import React from "react";
import BottomInfo from "c:/Users/Jacky.lee/Desktop/MusicWeb/src/components/BottomInfo";
describe("BottomInfo:UI Test", () => {
  it("UI test", () => {
    const component = renderer.create(<BottomInfo />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import React from "react";
import AnimationBanner from "../animationBanner/BannerStyle1";
import AnimationBanner2 from "../animationBanner/BannerStyle2";
import HomeContent from "../HomeContent";
import SectionContent from "../SectionContent";
import { Provider } from "mobx-react";
describe("AboutContent:UI Test", () => {
  // 測試 AboutContent 表單畫面
  it("UI test", () => {
    const wrapper = mount(<HomeContent />);
    // 開始測試
    expect(wrapper.find(SectionContent)).toHaveLength(4);
    expect(wrapper.find(AnimationBanner)).toHaveLength(1);
    expect(wrapper.find(AnimationBanner2)).toHaveLength(1);
  });
});

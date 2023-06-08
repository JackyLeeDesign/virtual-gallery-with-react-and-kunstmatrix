import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import React from "react";
import PicCard from "../PicGallery/PicCard";

import { Provider } from "mobx-react";
describe("PicCard:UI Test", () => {
  // 測試 PicCard 畫面
  it("UI test", () => {
    const wrapper = mount(<PicCard />);
    // 開始測試
    expect(wrapper.find(".titleBox")).toHaveLength(1);
    expect(wrapper.find(".cardBox")).toHaveLength(1);
    expect(wrapper.find(".textBox")).toHaveLength(1);
  });
});
describe("PicCard:Action Test", () => {
  // 測試 PicCard style 樣式選擇
  it("Style Select test", () => {
    for (let i = 1; i <= 12; i++) {
      const wrapper = mount(<PicCard picStyle={i} />);
      expect(wrapper.find(`.cardBoxWidth${i}`)).toHaveLength(1);
    }
  });
});

import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import React from "react";
import ContactStore from "../../../store/ContactStore";
import ContactForm from "../ContactForm";
import AboutContent from "../AboutContent";
import SectionContent from "../SectionContent";
import PicAndInfo from "../PicAndInfo";
import { Provider } from "mobx-react";
describe("AboutContent:UI Test", () => {
  // 測試 AboutContent 表單畫面
  it("UI test", () => {
    const contactStore = new ContactStore();
    const wrapper = mount(
      <Provider contactStore={contactStore}>
        <AboutContent />
      </Provider>
    );
    // 開始測試
    expect(wrapper.find(ContactForm)).toHaveLength(1);
    expect(wrapper.find(SectionContent)).toHaveLength(2);
    expect(wrapper.find(PicAndInfo)).toHaveLength(1);
  });
});

import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import React from "react";
import ContactStore from "../../../store/ContactStore";
import ContactForm from "../ContactForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Provider } from "mobx-react";
describe("ContactForm:UI Test", () => {
  // 測試 ContactForm 表單畫面
  it("UI test", () => {
    const contactStore = new ContactStore();
    const wrapper = mount(<ContactForm contactStore={contactStore} />);
    // 開始測試
    const contactForm = wrapper.find(ContactForm).at(0);
    expect(contactForm.find("input")).toHaveLength(3);
    expect(contactForm.find(FontAwesomeIcon)).toHaveLength(3);
    expect(contactForm.find("button")).toHaveLength(1);
  });
});
describe("ContactForm:Action Test", () => {
  const ContactFormState = {
    contactStore: undefined,
    wrapper: undefined
  };
  beforeEach(() => {
    ContactFormState.contactStore = new ContactStore();
    ContactFormState.wrapper = mount(
      <Provider contactStore={ContactFormState.contactStore}>
        <ContactForm />
      </Provider>
    );
  });

  // 測試 ContactForm 表單點擊
  it("Click test_true", () => {
    // 開始測試
    const inputName = ContactFormState.wrapper.find("input").at(0);
    inputName.simulate("change", { target: { value: "123", name: "name" } });
    const inputEmail = ContactFormState.wrapper.find("input").at(1);
    inputEmail.simulate("change", { target: { value: "456", name: "email" } });
    const inputContent = ContactFormState.wrapper.find("input").at(2);
    inputContent.simulate("change", {
      target: { value: "789", name: "content" }
    });
    ContactFormState.wrapper.update();
    expect(ContactFormState.contactStore.name).toEqual("123");
    expect(ContactFormState.contactStore.email).toEqual("456");
    expect(ContactFormState.contactStore.content).toEqual("789");
    ContactFormState.wrapper.find("button").simulate("click");
    ContactFormState.wrapper.update();
    expect(ContactFormState.wrapper.find(".text_green")).toHaveLength(1);
  });

  it("Click test_false", () => {
    // 開始測試
    ContactFormState.wrapper.find("button").simulate("click");
    ContactFormState.wrapper.update();
    expect(ContactFormState.wrapper.find(".text_red")).toHaveLength(1);
  });
});

import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import React from "react";
import RightIcon from "../SideIcon/RightIcon";
import SideIcon from "../SideIcon";
import ChangePageStore from "../../store/ChangePageStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Provider } from "mobx-react";
describe("SideIcon:UI Test", () => {
  test("UI test", () => {
    const changePageStore = new ChangePageStore();
    const wrapper = mount(<RightIcon changePageStore={changePageStore} />);
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(2);
    expect(wrapper.find("svg")).toHaveLength(2);
    expect(wrapper.find(".rightarea")).toHaveLength(1);
  });
});
describe("SideIcon:Action Test", () => {
  window.scrollTo = jest.fn();
  // remember the jsdom alert
  test("Click ChangePage test_true", () => {
    const changePageStore = new ChangePageStore();
    const wrapper = mount(
      <Provider changePageStore={changePageStore}>
        <SideIcon />
      </Provider>
    );
    changePageStore.changeState(1);
    wrapper
      .find(FontAwesomeIcon)
      .at(1)
      .simulate("click");
    wrapper.update();
    expect(changePageStore.page).toBe(0);
    window.scrollTo.mockClear();
  });
  test("Click Scroll test_true", () => {
    const changePageStore = new ChangePageStore();
    const wrapper = mount(
      <Provider changePageStore={changePageStore}>
        <SideIcon />
      </Provider>
    );
    wrapper
      .find(FontAwesomeIcon)
      .at(0)
      .simulate("click");
    wrapper.update();
    expect(changePageStore.scrollyValue).toBe(0);
    window.scrollTo.mockClear();
  });
  test("Scroll test_true", () => {
    const changePageStore = new ChangePageStore();
    const wrapper = mount(
      <Provider changePageStore={changePageStore}>
        <SideIcon />
      </Provider>
    );
    expect(wrapper.find(".ndisplay")).toHaveLength(2);
    changePageStore.changeScrollyValue(20);
    wrapper.update();
    expect(wrapper.find(".display")).toHaveLength(2);
    window.scrollTo.mockClear();
  });
});

import { mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import React from "react";
import Menu from "../TopInfo/Menu";
import TopInfo from "../TopInfo";
import ChangePageStore from "../../store/ChangePageStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Provider } from "mobx-react";
describe("TopInfo:UI Test", () => {
  it("UI test", () => {
    const changePageStore = new ChangePageStore();
    const wrapper = mount(<Menu changePageStore={changePageStore} />);
    expect(wrapper.find(FontAwesomeIcon)).toHaveLength(2);
    expect(wrapper.find("svg")).toHaveLength(2);
    expect(wrapper.find(".topbar")).toHaveLength(1);
  });
});
describe("TopInfo:Action Test", () => {
  const topInfoState = {
    changePageStore: null,
    wrapper: null
  };
  beforeEach(() => {
    // Clears the database and adds some testing data.
    // Jest will wait for this promise to resolve before running tests.
    topInfoState.changePageStore = new ChangePageStore();
    topInfoState.wrapper = mount(
      <Provider changePageStore={topInfoState.changePageStore}>
        <TopInfo />
      </Provider>
    );
  });
  //測試 ContactForm 表單點擊
  test("Click test_toHomepage", () => {
    const svgAbout = topInfoState.wrapper.find(FontAwesomeIcon).at(1);
    topInfoState.changePageStore.changeState(0);
    svgAbout.simulate("click");
    topInfoState.wrapper.update();
    expect(topInfoState.changePageStore.page).toBe(1);
  });
  test("Click test_toAboutpage", () => {
    const webTitleName = topInfoState.wrapper.find(".pointercurserLeft").at(1);
    topInfoState.changePageStore.changeState(1);
    webTitleName.simulate("click");
    topInfoState.wrapper.update();
    expect(topInfoState.changePageStore.page).toBe(0);
  });
  test("Scroll action", () => {
    topInfoState.changePageStore.changeScrollyValue(20);
    topInfoState.wrapper.update();
    expect(
      topInfoState.wrapper.find(".meterleft").prop("style")
    ).toHaveProperty("width", "20%");
    expect(
      topInfoState.wrapper.find(".meterright").prop("style")
    ).toHaveProperty("width", "80%");
    topInfoState.changePageStore.changeScrollyValue(0);
    topInfoState.wrapper.update();
    expect(
      topInfoState.wrapper.find(".meterleft").prop("style")
    ).toHaveProperty("width", "0%");
    expect(
      topInfoState.wrapper.find(".meterright").prop("style")
    ).toHaveProperty("width", "100%");
  });
});

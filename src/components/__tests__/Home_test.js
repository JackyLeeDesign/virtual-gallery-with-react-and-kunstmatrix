// import { create } from "react-test-renderer";
// import React, { Suspense } from "react";
// import Home from "../Home";
// import TopInfo from "../TopInfo";
// import SideIcon from "../SideIcon";
// import BottomInfo from "../BottomInfo";
// import HomeContent from "../mainContent/HomeContent";
// import AboutContent from "../mainContent/AboutContent";
// import LoadingHome from "../LoadingHome";
// import ChangePageStore from "../../store/ChangePageStore";
// import ContactStore from "../../store/ContactStore";
// import { Provider } from "mobx-react";
// describe("CustomComponent", () => {
//   it("Home:Action Test", async () => {
//     const changePageStore = new ChangePageStore();
//     const contactStore = new ContactStore();
//     const wrapper = create(
//       <Suspense fallback={LoadingHome}>
//         <Provider changePageStore={changePageStore} contactStore={contactStore}>
//           <Home />
//         </Provider>
//       </Suspense>
//     );

//     await TopInfo;
//     await SideIcon;
//     await BottomInfo;
//     await HomeContent;
//     await AboutContent;
//     console.log(TopInfo.toJSON);
//   });
// });
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });
import React, { Suspense, lazy } from "react";
import Home from "../Home";
import TopInfo from "../TopInfo";
import SideIcon from "../SideIcon";
import BottomInfo from "c:/Users/Jacky.lee/Desktop/MusicWeb/src/components/BottomInfo";
import HomeContent from "../mainContent/HomeContent";
import AboutContent from "../mainContent/AboutContent";
import LoadingHome from "../LoadingHome";
import ChangePageStore from "../../store/ChangePageStore";
import ContactStore from "../../store/ContactStore";
import { Provider } from "mobx-react";
describe("Home:Action Test", () => {
  //測試 Home 每個子頁面是否正常運作
  test("Page test_toHomepage", () => {
    const changePageStore = new ChangePageStore();
    const contactStore = new ContactStore();
    changePageStore.changeState(-1); // -1 測試預設頁面是否為首頁
    const fackLoading = jest.fn();
    const wrapper = shallow(
      <Suspense fallback={fackLoading}>
        <Provider changePageStore={changePageStore} contactStore={contactStore}>
          <Home />
        </Provider>
      </Suspense>,
      { suspenseFallback: false }
    );
    expect(wrapper.find(Home)).toHaveLength(1);
    changePageStore.changeState(1);
    expect(changePageStore.page).toBe(1);
    changePageStore.changeState(0);
    expect(changePageStore.page).toBe(0);
  });
});

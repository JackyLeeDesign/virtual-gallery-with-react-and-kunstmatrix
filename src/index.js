import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "!style-loader!css-loader!../css/reset.css";
import "!style-loader!css-loader!../css/custom-style.css";
import LoadingHome from "./components/LoadingHome";
import { Provider } from "mobx-react";
import ChangePageStore from "./store/ChangePageStore";
import ContactStore from "./store/ContactStore";
import Home from "./components/Home";
const changePageStore = new ChangePageStore();
const contactStore = new ContactStore();
// localStorage.setItem("colorSelect", 1);
// let storageValue = localStorage.getItem("colorSelect", 1);
// alert(storageValue);
// 總高度

window.addEventListener("scroll", () => {
  changePageStore.changeScrollyValue(
    (document.scrollingElement.scrollTop /
      (document.body.offsetHeight - window.innerHeight)) *
      100
  );
});

const root = createRoot(document.getElementById('IndexLayout'));
root.render(
  <BrowserRouter>
    <Suspense fallback={<LoadingHome />}>
      <Provider changePageStore={changePageStore} contactStore={contactStore}>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<Home></Home>} />
          </Routes>
        </div>
      </Provider>
    </Suspense>
  </BrowserRouter>
);

module.hot.accept();

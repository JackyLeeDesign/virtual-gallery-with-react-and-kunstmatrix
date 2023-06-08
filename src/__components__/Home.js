import React, { Fragment } from "react";
const TopInfo = React.lazy(() => import("./TopInfo"));
const SideIcon = React.lazy(() => import("./SideIcon"));
const MainContent = React.lazy(() => import("./mainContent/HomeContent"));
const AboutContent = React.lazy(() => import("./mainContent/AboutContent"));
// const Kalimba = React.lazy(() => import("./mainContent/Kalimba"));
// const MusicContent = React.lazy(() => import("./mainContent/MusicContent"));
const BottomInfo = React.lazy(() => import("./BottomInfo"));
// import MusicStore from "../store/MusicStore";
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";
// const musicStore = new MusicStore();
const changePage = (pageNum) => {
  switch (pageNum) {
    case 0:
      return <MainContent />;
    case 1:
      return <AboutContent />;
    // case 2:
    //   return <Kalimba musicStore={musicStore} />;
    // case 3:
    // return <MusicContent musicStore={musicStore} />;
    default:
      return <MainContent />;
  }
};
const Home = (props) => {
  const { changePageStore } = props;
  return (
    <Fragment>
      <TopInfo />
      <SideIcon />
      {changePage(changePageStore.page)}
      {changePageStore.page !== 3 && <BottomInfo />}
    </Fragment>
  );
};
Home.propTypes = {
  // An object taking on a particular shape
  changePageStore: PropTypes.shape({
    page: PropTypes.number,
  }),
};
export default inject("changePageStore")(observer(Home));

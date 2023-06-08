import React, { Fragment } from "react";
// const TopInfo = React.lazy(() => import("./TopInfo"));
const SideIcon = React.lazy(() => import("./SideIcon"));
const HomeContent = React.lazy(() => import("./mainContent/HomeContent"));
const BottomInfo = React.lazy(() => import("./BottomInfo"));
import { observer, inject } from "mobx-react";
import PropTypes from "prop-types";
const changePage = (pageNum) => {
  switch (pageNum) {
    case 0:
      return <HomeContent />;
    // case 1:
    //   return <AboutContent />;
    // case 2:
    //   return <Kalimba musicStore={musicStore} />;
    // case 3:
    // return <MusicContent musicStore={musicStore} />;
    default:
      return <HomeContent />;
  }
};
const Home = (props) => {
  const { changePageStore } = props;
  return (
    <Fragment>
      {/* <TopInfo /> */}
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

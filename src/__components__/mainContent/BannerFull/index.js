import React from "react";
import getClientWH from "../../../util/getClientWH";
import BannerContent from "../BannerContent";
import style from "./index.css";
import MultipleStyle from "classnames";

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPicNum: 0
    };
  }
  componentDidMount = () => {
    this.changePic();
    this.timerID = setInterval(
      () => this.changePic(),
      !!this.props.second ? this.props.second * 1000 : 5
    );
  };
  componentWillUnmount = () => {
    clearInterval(this.timerID);
  };
  changePic = () => {
    let maxPicNum = this.props.imgArray.length;
    if (this.state.currentPicNum < maxPicNum) {
      this.setState(state => ({
        currentPicNum: (state.currentPicNum += 1)
      }));
      //this.state.currentPicNum += 1;
    } else {
      this.setState(state => ({
        currentPicNum: 1
      }));
    }
  };
  render = () => {
    let namesrc = {
      backgroundImage:
        "url(" + this.props.imgArray[this.state.currentPicNum - 1] + ")",
      height: getClientWH(50, false).cliHei.toString() + "px"
    };
    return (
      <div
        className={MultipleStyle(style.bannerPic, style.showy)}
        style={namesrc}
      >
        <BannerContent
          contentNum={this.state.currentPicNum - 1}
          contentArray={["1", "2", "3", "4", "5"]}
        />
      </div>
    );
  };
}
export default Banner;

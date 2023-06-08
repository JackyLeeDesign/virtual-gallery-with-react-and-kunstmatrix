import React from "react";
import getClientWH from "../../../util/getClientWH";
import BannerContent from "../../MainContent/BannerFullContent";
import style from "./index.css";
import bannerimg01 from "../../../../assets/images/top_banner1.jpg";
import bannerimg02 from "../../../../assets/images/top_banner2.jpg";
import bannerimg03 from "../../../../assets/images/top_banner3.jpg";
import bannerimg04 from "../../../../assets/images/top_banner4.jpg";
import bannerimg05 from "../../../../assets/images/top_banner5.jpg";
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
    this.timerID = setInterval(() => this.changePic(), 5000);
  };
  componentWillUnmount = () => {
    clearInterval(this.timerID);
  };
  changePic = () => {
    let maxPicNum = 5;
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
    let bannerimg = [
      bannerimg01,
      bannerimg02,
      bannerimg03,
      bannerimg04,
      bannerimg05
    ];
    let namesrc = {
      backgroundImage: "url(" + bannerimg[this.state.currentPicNum - 1] + ")",
      height: getClientWH(50, false).cliHei.toString() + "px"
    };
    return (
      <div
        className={MultipleStyle(style.bannerPic, style.showy)}
        style={namesrc}
      >
        <BannerContent
          contentNum={this.state.currentPicNum - 1}
          contentArray={[
            "The future never happens. We transform the future into the present.",
            "NTT DATA Launches Artificial Intelligence Center of Excellence.",
            "NTT DATA is a diverse company with fulfilling and challenging opportunities to build your career.",
            "NTT DATA Group contributes to solving social issues and building a sustainable society with IT solutions.",
            "NTT DATA received the RobecoSAM Sustainability Award 2019 as a “Gold Class”."
          ]}
        />
      </div>
    );
  };
}
export default Banner;

import React from "react";
import style from "./index.css";
import tree from "../../../../assets/images/music/tree.png";
import briteTreeBig from "../../../../assets/images/music/briteTreeBig.png";
import briteTreeSmall from "../../../../assets/images/music/briteTreeSmall.png";
import cloud1 from "../../../../assets/images/music/cloud1.png";
import cloud2 from "../../../../assets/images/music/cloud2.png";
import sun from "../../../../assets/images/music/sun.png";
import moon from "../../../../assets/images/music/moon.png";
import ground from "../../../../assets/images/music/ground.png";
import leaf1 from "../../../../assets/images/music/leaf1.png";
import leaf2 from "../../../../assets/images/music/leaf2.png";
import leaf3 from "../../../../assets/images/music/leaf3.png";
import leaf4 from "../../../../assets/images/music/leaf4.png";
import leaf5 from "../../../../assets/images/music/leaf5.png";
import leaf6 from "../../../../assets/images/music/leaf6.png";
import leaf7 from "../../../../assets/images/music/leaf7.png";
import MusicStore from "../../../store/MusicStore";

class MusicContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      _do: 0,
      _re: 0,
      _mi: 0,
      _fa: 0,
      _so: 0,
      _la: 0,
      _si: 0,
    };
  }
  render = () => {
    const { _do, _re, _mi, _fa, _so, _la, _si } = this.state;
    const { musicStore } = this.props;
    return (
      <div className={style.background}>
        <button
          onClick={() => this.setState({ do: _do + 1 })}
          className={style.btn}
        >
          do
        </button>
        <button
          onClick={() => this.setState({ do: _re + 1 })}
          className={style.btn}
        >
          re
        </button>
        <button
          onClick={() => this.setState({ do: _mi + 1 })}
          className={style.btn}
        >
          mi
        </button>
        <button
          onClick={() => this.setState({ do: _fa + 1 })}
          className={style.btn}
        >
          fa
        </button>
        <button
          onClick={() => this.setState({ do: _so + 1 })}
          className={style.btn}
        >
          so
        </button>
        <button
          onClick={() => this.setState({ do: _la + 1 })}
          className={style.btn}
        >
          la
        </button>
        <button
          onClick={() => this.setState({ do: _si + 1 })}
          className={style.btn}
        >
          si
        </button>
        <button>{musicStore.soundOutPut}</button>
        <div>
          <div>
            <img src={ground} className={style.ground} />
          </div>
        </div>
      </div>
    );
  };
}
export default MusicContent;

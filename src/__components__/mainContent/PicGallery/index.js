import React from "react";
import PicCard from "./PicCard";
const PicGallery = props => {
  let selectStyle = 1;
  selectStyle = props.picStyle;

  const divPics = props.pics.map(itemnum => (
    <PicCard key={itemnum.toString()} pic={itemnum} picStyle={selectStyle} />
  ));
  return <React.Fragment>{divPics}</React.Fragment>;
};
export default PicGallery;

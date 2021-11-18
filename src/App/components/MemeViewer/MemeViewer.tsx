import React from "react";
import PropTypes from "prop-types";
import styles from "./MemeViewer.module.scss";
import { I_Image, I_Meme } from "../../interfaces/interfaces";

interface I_Props {
  meme: I_Meme;
  image?: I_Image;
}

const MemeViewer: React.FC<I_Props> = (props) => {
  console.log(props);

  return (
    <svg
      className={styles.MemeViewer}
      data-testid="MemeViewer"
      viewBox={`0 0 ${props.image ? props.image.w : 1000} ${
        props.image ? props.image.h : 1000
      }`}
    >
      {props.image && <image href={props.image.url} x="0" y="0" />}
      <text
        x={props.meme.x}
        y={props.meme.y}
        fill={props.meme.color}
        fontSize={props.meme.fontSize}
        textDecoration={props.meme.underline ? "underline" : "none"}
        fontStyle={props.meme.italic ? "italic" : "normal"}
        fontWeight={props.meme.fontWeight}
      >
        {props.meme.text}
      </text>
    </svg>
  );
};
/* remplace par le type en ts*/
// MemeViewer.propTypes = {
//   meme: PropTypes.object.isRequired,
//   image: PropTypes.object,
// };

MemeViewer.defaultProps = {};

export default MemeViewer;

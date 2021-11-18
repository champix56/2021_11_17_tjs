import React, { useEffect, useState } from "react";
import style from "./Button.module.css";
import PropTypes from "prop-types";
/**
 * Composant de button html
 * @param {object} props props du composant
 * @returns component render
 */
const Button = (props) => {
  const [clicked, setClicked] = useState({state:false,autreValue:'Demat la bretagne'})
  useEffect(() => {
    //execution que si etat du button clicked
    if(!clicked.state)return;
    console.log(clicked)
    setTimeout(()=>{
      setClicked({...clicked, state:false});
    },300)
    //retourne la fonction de "willUnmount" 
    //return () => {
    //   cleanup
    // }
  }, [clicked])
  console.log(props);
  return (
    <button
      className={`${style.Button}${clicked.state?' '+style.clicked:''}`}
      style={{
        backgroundColor: props.bgColor,
        color: props.color,
        ...props.style,
      }}
      onClick={(evt) => {
        setClicked({...clicked, state:true});
        //evenement gerer par le composant pas renvoyé au parent
        props.onButtonClicked();
      }}
      type={props.type}
    >
      {props.text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onButtonClicked: PropTypes.func.isRequired,
  bgColor: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  style: PropTypes.object,
  type: PropTypes.string,
};
Button.defaultProps = {
  bgColor: "yellowgreen",
  color: "white",
};
export default Button;

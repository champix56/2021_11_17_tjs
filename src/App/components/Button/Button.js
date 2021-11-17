import React from "react";
import "./Button.css";
/**
 * Composant de button html
 * @param {object} props props du composant
 * @returns component render
 */
const Button = (props) => {
  console.log(props);
  return (
    <button
      className="Button"
      onClick={(evt) => {
        //evenement gerer par le composant pas renvoyé au parent
        props.onButtonClicked();
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;

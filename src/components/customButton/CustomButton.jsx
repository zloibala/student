import React from "react";

const CustomButton = (props) => {
  return <button onClick={props.onClickButton}> {props.text} </button>;
};

export default CustomButton;

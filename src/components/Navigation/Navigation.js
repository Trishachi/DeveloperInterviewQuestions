import React from "react";
import html from "./html.svg";
import css from "./css.svg";
import javascript from "./js.svg";
import "./Navigation.css";

const Navigation = (props) => {
  return (
    <div id="Header" className="Navigation">
      <img
        id="Html"
        src={html}
        alt="html"
        className="svg-image"
        onClick={props.ButtonClicked}
      />
      <img
        id="Css"
        src={css}
        alt="css"
        className="svg-image"
        onClick={props.ButtonClicked}
      />
      <img
        id="Javascript"
        src={javascript}
        alt="javascript"
        className="svg-image"
        onClick={props.ButtonClicked}
      />
    </div>
  );
};

export default Navigation;

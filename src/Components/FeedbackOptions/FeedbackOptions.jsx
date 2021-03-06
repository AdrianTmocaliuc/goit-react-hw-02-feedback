// import { Component } from "react";
import style from "./FeedbackOptions.module.css";

import PropTypes from "prop-types";

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className={style.feedback}>
      <div className={style.buttons}>
        <button name={"good"} type="button" onClick={onLeaveFeedback}>
          Good
        </button>
        <button name={"neutral"} type="button" onClick={onLeaveFeedback}>
          Neutral
        </button>
        <button name={"bad"} type="button" onClick={onLeaveFeedback}>
          Bad
        </button>
      </div>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

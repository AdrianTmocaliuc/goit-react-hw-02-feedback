// import PropTypes from "prop-types";

// import { Component } from "react";
import style from "./Statistics.module.css";

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={style.statistic}>
      <div className={style.count}>
        <span className={style.countGood}>Good: {good}</span>
        <span className={style.countNeutral}>Neutral: {neutral}</span>
        <span className={style.countBad}>Bad: {bad}</span>
        <span className={style.countTotal}>Total: {total}</span>
        <span className={style.procent}>
          Positive feedback: {positivePercentage}%
        </span>
      </div>
    </div>
  );
};

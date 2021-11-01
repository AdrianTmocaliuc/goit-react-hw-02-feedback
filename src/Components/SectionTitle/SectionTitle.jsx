import style from "./SectionTitle.module.css";

// import { Component } from "react";

export const Section = ({ title, children }) => {
  return (
    <section>
      <h2 className={style.title}>{title}</h2>
      {children}
    </section>
  );
};

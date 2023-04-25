import React from "react";
import styles from "./Circle.module.css";

const Circle = ({ children }) => {
  return <div className={styles.circle}>{children}</div>;
};

export default Circle;

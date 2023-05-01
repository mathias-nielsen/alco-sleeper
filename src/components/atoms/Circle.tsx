import React from "react";
import styles from "./Circle.module.css";

interface CircleProps {
  children: React.ReactNode;
}

const Circle = ({ children }: CircleProps) => {
  return <div className={styles.circle}>{children}</div>;
};

export default Circle;

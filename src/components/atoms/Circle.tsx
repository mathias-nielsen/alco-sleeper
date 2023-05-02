import React from "react";
import styles from "./Circle.module.css";

interface CircleProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Circle = ({ children, onClick }: CircleProps) => {
  return (
    <div onClick={onClick} className={styles.circle}>
      {children}
    </div>
  );
};

export default Circle;

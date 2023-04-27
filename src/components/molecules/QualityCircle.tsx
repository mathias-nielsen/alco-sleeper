import React from "react";
import CircularProgressWithLabel from "../atoms/CircularWithLabel";
import styles from "./QualityCircle.module.css";

interface QualityCircleProps {
  value: number;
}

export default function QualityCircle({ value }: QualityCircleProps) {
  return (
    <div className={styles.container}>
      <p>Quality</p>
      <div>
        <CircularProgressWithLabel value={value} />
      </div>
    </div>
  );
}

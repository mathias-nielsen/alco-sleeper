import React from "react";
import CircularProgressWithLabel from "../atoms/CircularWithLabel";
import styles from "./QualityCircle.module.css";
import { SubjectiveSleep } from "@/types";

interface QualityCircleProps {
  value: SubjectiveSleep;
}

export default function QualityCircle({ value = 100 }: QualityCircleProps) {
  return (
    <div className={styles.container}>
      <h5>Quality</h5>
      <div>
        <CircularProgressWithLabel value={value} />
      </div>
    </div>
  );
}

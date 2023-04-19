import React from "react";
import CircularProgressWithLabel from "../atoms/CircularWithLabel";
import styles from "./Quality.module.css";

export default function Quality() {
  return (
    <div className={styles.container}>
      <h5>Quality</h5>
      <div>
        <CircularProgressWithLabel value={67} />
      </div>
    </div>
  );
}

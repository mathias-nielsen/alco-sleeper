import React from "react";
import styles from "./DrinkTotal.module.css";
import Circle from "@/components/atoms/Circle";

interface DrinkTotalProps {
  amount: number;
}

const DrinkTotal = ({ amount }: DrinkTotalProps) => {
  return (
    <div className={styles.totalCircle}>
      <Circle>
        <p className={styles.total}>{amount}</p>
      </Circle>
    </div>
  );
};

export default DrinkTotal;

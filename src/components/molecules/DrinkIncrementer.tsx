import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import styles from "./DrinkIncrementer.module.css";

interface DrinkIncrementerProps {
  title: string;
  description: string;
  amount: number;
  setAmount: (updater: (currValue: number) => void) => void;
}

const DrinkIncrementer = ({
  description,
  title,
  amount,
  setAmount,
}: DrinkIncrementerProps) => {
  const decrease = () => {
    setAmount((currValue) => currValue - 1);
  };

  const increase = () => {
    setAmount((currValue) => currValue + 1);
  };

  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={amount === 0}
        onClick={decrease}
      >
        <RemoveIcon />
      </button>
      <div className={styles.description}>
        <p>{`${title} x ${amount}`} </p>
        <p>({description})</p>
      </div>
      <button className={styles.button} onClick={increase}>
        <AddIcon />
      </button>
    </div>
  );
};

export default DrinkIncrementer;

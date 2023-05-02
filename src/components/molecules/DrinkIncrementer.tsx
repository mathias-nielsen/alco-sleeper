import React from "react";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import styles from "./DrinkIncrementer.module.css";
import { useDispatch } from "react-redux";
import {
  decrementEntry,
  incrementEntry,
} from "@/store/slices/alcoEntriesSlice";
import formatToFitbitDate from "@/utils/formatToFitbitDate";

interface DrinkIncrementerProps {
  referenceId: number;
  title: string;
  description: string;
  amount: number;
  selectedIsoDate: string;
}

const DrinkIncrementer = ({
  referenceId,
  description,
  title,
  amount,
  selectedIsoDate,
}: DrinkIncrementerProps) => {
  const dispatch = useDispatch();

  const decrease = () => {
    //@ts-ignore
    dispatch(
      decrementEntry({
        date: formatToFitbitDate(selectedIsoDate),
        referenceId,
      })
    );
  };

  const increase = () => {
    //@ts-ignore
    dispatch(
      incrementEntry({
        date: formatToFitbitDate(selectedIsoDate),
        referenceId,
      })
    );
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

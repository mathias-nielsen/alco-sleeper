import React from "react";
import DrinkIncrementer from "@/components/molecules/DrinkIncrementer";
import { Divider } from "@mui/material";
import styles from "./DrinkList.module.css";

interface DrinkIncrementItem {
  title: string;
  description: string;
  amount: number;
}

interface DrinkListProps {
  drinks: DrinkIncrementItem[];
}

const DrinkList = ({ drinks }: DrinkListProps) => {
  return (
    <div>
      {drinks.map((drink) => {
        return (
          <>
            <DrinkIncrementer
              key={drink.title}
              title={drink.title}
              description={drink.description}
              amount={drink.amount}
              setAmount={() => {}}
            />
            <Divider className={styles.divider} variant="middle" />
          </>
        );
      })}
    </div>
  );
};

export default DrinkList;

import React from "react";
import styles from "./DrinksSection.module.css";
import DrinkList from "@/components/organisms/DrinkList";
import Circle from "@/components/atoms/Circle";
import AddIcon from "@mui/icons-material/Add";

const fakeDrinksData = [
  {
    title: "Beer",
    description: "330ml, 5%",
    amount: 0,
  },
  {
    title: "Wine",
    description: "150ml, 12%",
    amount: 0,
  },
];

const DrinksSections = () => {
  return (
    <div className={styles.container}>
      <h3>My Drinks</h3>
      <div className={styles.totalCircle}>
        <Circle>
          <p className={styles.total}>0</p>
        </Circle>
      </div>
      <div className={styles.increments}>
        <DrinkList drinks={fakeDrinksData} />
      </div>
      <div className={styles.addCircle}>
        <Circle>
          <AddIcon className={styles.addIcon} />
        </Circle>
      </div>
    </div>
  );
};

export default DrinksSections;

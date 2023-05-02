import React from "react";
import styles from "./DrinksSection.module.css";
import DrinkList from "@/components/organisms/DrinkList";
import Circle from "@/components/atoms/Circle";
import AddIcon from "@mui/icons-material/Add";
import DrinkTotal from "@/components/molecules/DrinkTotal";
import { useSelector } from "react-redux";
import {
  AlcoEntry,
  selectAlcoEntriesValue,
} from "@/store/slices/alcoEntriesSlice";
import { selectDateValue } from "@/store/slices/selectedDateSlice";
import formatToFitbitDate from "@/utils/formatToFitbitDate";

const DrinksSections = () => {
  const alcoEntries = useSelector(selectAlcoEntriesValue);
  const dateState = useSelector(selectDateValue);

  const today: AlcoEntry | undefined = alcoEntries.value.entries.find(
    (entry) => entry.date === formatToFitbitDate(dateState.value.date)
  );

  return (
    <div className={styles.container}>
      <h3>My Drinks</h3>

      <DrinkTotal amount={today?.total ?? 0} />

      <div className={styles.increments}>
        <DrinkList
          definitions={alcoEntries.value.definitions}
          today={today}
          selectedIsoDate={dateState.value.date}
        />
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

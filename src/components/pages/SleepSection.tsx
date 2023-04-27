import React from "react";
import SleepRater from "@/components/organisms/SleepRater";
import QualityCircle from "@/components/molecules/QualityCircle";
import MySleepCircle from "@/components/molecules/MySleepCircle";
import SleepDonut from "@/components/organisms/SleepDonut";
import styles from "./SleepSection.module.css";
import SleepDetailList from "@/components/organisms/SleepDetailList";
import useSleepByDate from "@/data-hooks/useSleepByDate";
import { AuthState } from "@/store/slices/authSlice";
import useAuthOrRedirect from "@/data-hooks/useAuthOrRedirect";
import { useSelector } from "react-redux";
import { selectDateValue } from "@/store/slices/selectedDateSlice";

const SleepSection = () => {
  const authState: AuthState = useAuthOrRedirect();
  const dateState = useSelector(selectDateValue);
  const sleepData = useSleepByDate(authState.value, dateState.value.date);

  return (
    <div className={styles.container}>
      <SleepRater />
      <h3>Sleep summary</h3>
      {sleepData && (
        <div className={styles.splitter}>
          <div className={styles.twoThird}>
            <div className={styles.center}>
              <SleepDonut sleepData={sleepData} />
              <SleepDetailList sleepData={sleepData} />
            </div>
          </div>
          <div className={styles.oneThird}>
            <MySleepCircle value={100} />
            <QualityCircle value={sleepData.efficiency} />
          </div>
        </div>
      )}
      {!sleepData && (
        <div>
          <p>
            We received an unexpected error, and cannot retrieve your sleeping
            data at the moment.
          </p>
        </div>
      )}
    </div>
  );
};

export default SleepSection;

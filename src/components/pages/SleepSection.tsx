import React, { useEffect, useState } from "react";
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
import { selectSubjectiveSleep } from "@/store/slices/subjectiveSleepSlice";
import formatToFitbitDate from "@/utils/formatToFitbitDate";
import { SubjectiveSleep } from "@/types";

const SleepSection = () => {
  // Redux
  const authState: AuthState = useAuthOrRedirect();
  const dateState = useSelector(selectDateValue);
  const subjectiveSleep = useSelector(selectSubjectiveSleep);
  // Local state
  const [show, setShow] = useState(false);
  // Remote data
  const sleepData = useSleepByDate(authState.value, dateState.value.date);

  useEffect(() => {
    const mySleepValue = getMySleepValue(
      dateState.value.date,
      subjectiveSleep.value
    );
    setShow(mySleepValue === undefined);
  }, [subjectiveSleep, dateState]);

  const getMySleepValue = (
    isoDateStr: string,
    ratingObj: Record<string, SubjectiveSleep>
  ): SubjectiveSleep | undefined => {
    const d = formatToFitbitDate(isoDateStr);
    return ratingObj[d];
  };

  const handleClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <div className={styles.container}>
      {show && (
        <SleepRater
          selectedDate={dateState.value.date}
          hide={() => setShow(false)}
        />
      )}
      <h3>Sleep summary</h3>
      <div className={styles.splitter}>
        <div className={styles.twoThird}>
          <div className={styles.center}>
            {sleepData ? (
              <>
                <SleepDonut sleepData={sleepData} />
                <SleepDetailList sleepData={sleepData} />
              </>
            ) : (
              <p>
                We received an unexpected error, and cannot retrieve your
                sleeping data at the moment.
              </p>
            )}
          </div>
        </div>
        <div className={styles.oneThird}>
          <MySleepCircle
            value={getMySleepValue(dateState.value.date, subjectiveSleep.value)}
            onClick={handleClick}
          />
          <QualityCircle value={sleepData?.efficiency} />
        </div>
      </div>
    </div>
  );
};

export default SleepSection;

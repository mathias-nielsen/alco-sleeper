import React from "react";
import SleepRater from "@/components/organisms/SleepRater";
import QualityCircle from "@/components/molecules/QualityCircle";
import MySleepCircle from "@/components/molecules/MySleepCircle";
import SleepDonut from "@/components/organisms/SleepDonut";
import styles from "./SleepSection.module.css";
import SleepDetailList from "@/components/organisms/SleepDetailList";

const SleepSection = () => {
  return (
    <div className={styles.container}>
      <SleepRater />
      <div className={styles.splitter}>
        <div className={styles.twoThird}>
          <div className={styles.center}>
            <h3>Sleep duration</h3>
            <SleepDonut />
            <SleepDetailList />
          </div>
        </div>
        <div className={styles.oneThird}>
          <MySleepCircle value={100} />
          <QualityCircle value={100} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default SleepSection;

import React from "react";
import SleepDetail from "@/components/atoms/SleepDetail";
import { ColorPalette } from "@/types/colors";
import styles from "./SleepDetailList.module.css";

const SleepDetailList = () => {
  return (
    <div className={styles.container}>
      <SleepDetail
        title={"Light"}
        hours={3}
        minutes={53}
        color={ColorPalette.LIGHT_BLUE}
      />
      <SleepDetail
        title={"Deep"}
        hours={1}
        minutes={26}
        color={ColorPalette.DARK_BLUE}
      />
      <SleepDetail
        title={"REM"}
        hours={1}
        minutes={35}
        color={ColorPalette.LIGHT_RED}
      />
      <SleepDetail
        title={"Awake"}
        hours={3}
        minutes={53}
        color={ColorPalette.DARK_RED}
      />
    </div>
  );
};

export default SleepDetailList;

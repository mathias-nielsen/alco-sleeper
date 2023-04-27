import React from "react";
import SleepDetail from "@/components/atoms/SleepDetail";
import { ColorPalette } from "@/types/colors";
import styles from "./SleepDetailList.module.css";
import { FitbitSleepDTO } from "@/types";

interface SleepDetailListProps {
  sleepData: FitbitSleepDTO;
}

const SleepDetailList = ({ sleepData }: SleepDetailListProps) => {
  const summary = sleepData.levels.summary;

  const calcColor = (key: string) => {
    switch (key) {
      case "wake":
        return ColorPalette.DARK_RED;
      case "light":
        return ColorPalette.LIGHT_BLUE;
      case "rem":
        return ColorPalette.LIGHT_RED;
      case "deep":
        return ColorPalette.DARK_BLUE;
    }
  };

  const calcTitle = (key: string) => {
    if (key === "rem") {
      return "REM";
    } else {
      return key.slice(0, 1).toUpperCase() + key.slice(1);
    }
  };

  return (
    <div className={styles.container}>
      {Object.keys(sleepData.levels.summary).map((key) => {
        return (
          <SleepDetail
            title={calcTitle(key)}
            totalMinutes={sleepData.levels.summary[key].minutes}
            color={calcColor(key)}
          />
        );
      })}
    </div>
  );
};

export default SleepDetailList;

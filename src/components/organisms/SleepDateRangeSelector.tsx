import React, { useState } from "react";
import { Fab } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import styles from "@/components/organisms/SleepDateRangeSelector.module.css";
import MUIWeekPicker from "@/components/organisms/MUIWeekPicker";

const SleepDateRangeSelector = () => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow((curr) => !curr);
  };

  return (
    <>
      <div className={styles.headerContent}>
        <p>Statistics</p>
        <Fab
          color="primary"
          aria-label="choose-date"
          size="small"
          onClick={handleClick}
        >
          <CalendarMonthOutlinedIcon fontSize="small" />
        </Fab>
      </div>
      {show && (
        <div>
          <MUIWeekPicker setShow={setShow} />
        </div>
      )}
    </>
  );
};

export default SleepDateRangeSelector;

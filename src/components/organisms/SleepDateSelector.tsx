import React, { useEffect, useState } from "react";
import { Fab } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { useDispatch, useSelector } from "react-redux";
import { selectDateValue, setDate } from "@/store/slices/selectedDateSlice";
import { formatDate } from "@/utils/formatDate";
import styles from "./SleepDateSelector.module.css";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";

const SleepDateSelector = () => {
  const dateState = useSelector(selectDateValue);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState<any>(
    dayjs(dateState.value.date)
  );
  const handleClick = () => {
    setShow((curr) => !curr);
  };

  const handleChange = (newValue: any) => {
    setSelectedDate(newValue);
    //@ts-ignore
    dispatch(setDate(newValue.toISOString()));
    setShow(false);
  };

  return (
    <>
      <div className={styles.headerContent}>
        <p>{formatDate(dateState.value.date)}</p>
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
          <DateCalendar
            disableFuture={true}
            value={selectedDate}
            onChange={handleChange}
          />
        </div>
      )}
    </>
  );
};

export default SleepDateSelector;

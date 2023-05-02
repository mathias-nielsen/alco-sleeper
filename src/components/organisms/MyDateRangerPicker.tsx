import React, { useEffect, useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import styles from "./MyDateRangePicker.module.css";
import dayjs, { Dayjs } from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import {
  selectDateValue,
  setDateRange,
} from "@/store/slices/selectedDateSlice";
import formatToFitbitDate from "@/utils/formatToFitbitDate";

const MyDateRangerPicker = () => {
  const dateState = useSelector(selectDateValue);
  const dispatch = useDispatch();

  const onStartChange = (input: Dayjs) => {
    //@ts-ignore
    dispatch(
      setDateRange([
        formatToFitbitDate(input.toISOString()),
        dateState.value.dateRange[1],
      ])
    );
  };

  const onEndChange = (input: any) => {
    //@ts-ignore
    dispatch(
      setDateRange([
        dateState.value.dateRange[0],
        formatToFitbitDate(input.toISOString()),
      ])
    );
  };

  return (
    <div className={styles.container}>
      <DatePicker
        //@ts-ignore
        value={dayjs(dateState.value.dateRange[0]) as any}
        onChange={onStartChange}
        className={styles.picker}
        label="Start date"
        disableFuture={true}
        format={"DD/MM/YYYY"}
      />
      <DatePicker
        value={dayjs(dateState.value.dateRange[1]) as any}
        onChange={onEndChange}
        className={styles.picker}
        label="End date"
        disableFuture={true}
        format={"DD/MM/YYYY"}
      />
    </div>
  );
};

export default MyDateRangerPicker;

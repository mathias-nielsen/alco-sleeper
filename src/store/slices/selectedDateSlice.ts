import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
import dayjs from "dayjs";
import formatToFitbitDate from "@/utils/formatToFitbitDate";

export interface DateState {
  value: DateValue;
}

interface DateValue {
  date: string;
  dateRange: string[];
}

const initialState = {
  value: {
    date: new Date().toISOString(),
    dateRange: [
      formatToFitbitDate(dayjs().startOf("week").toISOString()),
      formatToFitbitDate(dayjs().endOf("week").toISOString()),
    ],
  },
} as DateState;

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setDate: (state: DateState, action: PayloadAction<string>) => {
      state.value.date = action.payload;
    },
    setDateRange(state: DateState, action: PayloadAction<string[]>) {
      state.value.dateRange = action.payload;
    },
  },
});

export const { setDate, setDateRange } = dateSlice.actions;
export const selectDateValue = (state: RootState): DateState => state.date;

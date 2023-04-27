import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

export interface DateState {
  value: DateValue;
}

interface DateValue {
  date: string;
}

const initialState = {
  value: {
    date: new Date().toISOString(),
  },
} as DateState;

export const dateSlice = createSlice({
  name: "date",
  initialState,
  reducers: {
    setDate: (state: DateState, action: PayloadAction<string>) => {
      console.log(action.payload);
      state.value.date = action.payload;
    },
  },
});

export const { setDate } = dateSlice.actions;
export const selectDateValue = (state: RootState): DateState => state.date;

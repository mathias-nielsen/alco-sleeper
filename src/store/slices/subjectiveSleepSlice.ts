import { createSlice } from "@reduxjs/toolkit";
import { SubjectiveSleep } from "@/types";

export interface SubjectiveSleepState {
  value: Record<string, SubjectiveSleep>;
}

const initialState = {
  value: {
    "2023-05-01": 80,
  },
} as SubjectiveSleepState;

export const subjectiveSleepSlice = createSlice({
  name: "subjectiveSleep",
  initialState,
  reducers: {
    setSubjectiveSleep: (state: SubjectiveSleepState, action) => {
      const { date, rating } = action.payload;
      state.value[date] = rating;
    },
  },
});

export const { setSubjectiveSleep } = subjectiveSleepSlice.actions;
export const selectSubjectiveSleep = (state: any): SubjectiveSleepState =>
  state.subjectiveSleep;

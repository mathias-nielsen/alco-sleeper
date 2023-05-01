import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
import manuelEntries from "@/store/slices/manuelEntries";

export interface AlcoEntriesState {
  value: AlcoEntriesValue;
}

interface AlcoEntriesValue {
  entries: AlcoEntry[];
}

export interface AlcoEntry {
  date: string;
  amount: number;
}

const initialState = {
  value: {
    entries: manuelEntries,
  },
} as AlcoEntriesState;

export const alcoEntriesSlice = createSlice({
  name: "alcoEntries",
  initialState,
  reducers: {
    createAlcoEntry: () => {},
  },
});

export const { createAlcoEntry } = alcoEntriesSlice.actions;
export const selectAlcoEntriesValue = (state: RootState): AlcoEntriesState =>
  state.alcoEntries;

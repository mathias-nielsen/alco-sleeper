import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";
import { manuelEntries, drinksDefinitions } from "@/store/slices/manuelEntries";

export interface AlcoEntriesState {
  value: AlcoEntriesValue;
}

interface AlcoEntriesValue {
  entries: AlcoEntry[];
  definitions: DrinkDefinition[];
}

export interface AlcoEntry {
  date: string;
  total: number;
  drinkReferences: DrinkReference[];
}

export interface DrinkReference {
  id: number;
  amount: number;
}

export interface DrinkDefinition {
  id: number;
  title: string;
  description: string;
}

const initialState = {
  value: {
    entries: manuelEntries as AlcoEntry[],
    definitions: drinksDefinitions as DrinkDefinition[],
  },
} as AlcoEntriesState;

export const alcoEntriesSlice = createSlice({
  name: "alcoEntries",
  initialState,
  reducers: {
    decrementEntry: (
      state: AlcoEntriesState,
      action: PayloadAction<{ date: string; referenceId: number }>
    ) => {
      state.value.entries.map((entry) => {
        if (entry.date === action.payload.date) {
          entry.total -= 1;
          entry.drinkReferences?.map((reference) => {
            if (reference.id === action.payload.referenceId) {
              reference.amount -= 1;
            }
            return reference;
          });
        }
        return entry;
      });
    },
    incrementEntry: (
      state: AlcoEntriesState,
      action: PayloadAction<{ date: string; referenceId: number }>
    ) => {
      const alcoEntry: AlcoEntry | undefined = state.value.entries.find(
        (entry) => entry.date === action.payload.date
      );

      if (alcoEntry) {
        alcoEntry.total += 1;
        const reference = alcoEntry.drinkReferences.find(
          (reference) => reference.id === action.payload.referenceId
        );

        if (reference) {
          reference.amount += 1;
        } else {
          alcoEntry.drinkReferences.push({
            amount: 1,
            id: action.payload.referenceId,
          });
        }
      } else {
        state.value.entries.push({
          date: action.payload.date,
          total: 1,
          drinkReferences: [
            {
              id: action.payload.referenceId,
              amount: 1,
            },
          ],
        });
      }
    },
  },
});

const handleExisting = (state: AlcoEntriesState, date, referenceId) => {
  console.log(date, referenceId);
  state.value.entries.map((entry) => {
    if (entry.date === date) {
      console.log("entry found");
      const entryExists = entry.drinkReferences.find(
        (entry) => entry.id === referenceId
      );

      if (entryExists) {
        entryExists.amount += 1;
      } else {
        entry.drinkReferences.push({
          id: referenceId,
          amount: 1,
        });
      }
    }
    return entry;
  });
};

const handleNew = (state: AlcoEntriesState, date, referenceId) => {};

export const { decrementEntry, incrementEntry } = alcoEntriesSlice.actions;
export const selectAlcoEntriesValue = (state: RootState): AlcoEntriesState =>
  state.alcoEntries;

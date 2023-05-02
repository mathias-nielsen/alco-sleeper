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

export interface DefinitionParts {
  title: string;
  strength: string;
  size: string;
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
    addDefinition: (
      state: AlcoEntriesState,
      action: PayloadAction<DefinitionParts>
    ) => {
      const max = state.value.definitions.reduce(function (prev, current) {
        return prev.id > current.id ? prev : current;
      }); //returns object

      state.value.definitions.push({
        id: max.id + 1,
        title: action.payload.title,
        description: `${action.payload.size}ml, ${action.payload.strength}%`, // "40ml, 40%",
      });
    },
  },
});

export const { decrementEntry, incrementEntry, addDefinition } =
  alcoEntriesSlice.actions;
export const selectAlcoEntriesValue = (state: RootState): AlcoEntriesState =>
  state.alcoEntries;

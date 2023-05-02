import React from "react";
import DrinkIncrementer from "@/components/molecules/DrinkIncrementer";
import { Divider } from "@mui/material";
import styles from "./DrinkList.module.css";
import { AlcoEntry, DrinkDefinition } from "@/store/slices/alcoEntriesSlice";

interface DrinkListProps {
  definitions: DrinkDefinition[];
  today?: AlcoEntry;
  selectedIsoDate: string;
}

interface JoinedDrink extends DrinkDefinition {
  amount: number;
}

const DrinkList = ({ definitions, today, selectedIsoDate }: DrinkListProps) => {
  const joined: JoinedDrink[] = definitions.map((definition) => {
    const reference = (today?.drinkReferences ?? []).find(
      (reference) => reference.id === definition.id
    );
    const amount = reference?.amount ?? 0;
    return { ...definition, amount };
  });

  return (
    <div>
      {joined.map((joined) => {
        return (
          <div key={joined.id}>
            <DrinkIncrementer
              referenceId={joined.id}
              title={joined.title}
              description={joined.description}
              amount={joined.amount}
              selectedIsoDate={selectedIsoDate}
            />
            <Divider className={styles.divider} variant="middle" />
          </div>
        );
      })}
    </div>
  );
};

export default DrinkList;

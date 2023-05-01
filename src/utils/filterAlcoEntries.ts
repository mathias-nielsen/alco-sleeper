import { AlcoEntry } from "@/store/slices/alcoEntriesSlice";

const filterAlcoEntries = (dateRange: string[], alcoEntries: AlcoEntry[]) => {
  const [first, last] = dateRange;
  console.log("first", first);
  console.log("last", last);
  const toReturn = [...alcoEntries].filter((entry) => {
    console.log(entry.date);
    return first <= entry.date && entry.date <= last;
  });
  return toReturn;
};

export default filterAlcoEntries;

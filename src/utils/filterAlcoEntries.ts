import { AlcoEntry } from "@/store/slices/alcoEntriesSlice";

const filterAlcoEntries = (dateRange: string[], alcoEntries: AlcoEntry[]) => {
  const [first, last] = dateRange;
  return [...alcoEntries].filter((entry) => {
    return first <= entry.date && entry.date <= last;
  });
};

export default filterAlcoEntries;

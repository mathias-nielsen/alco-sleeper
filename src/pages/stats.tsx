import DefaultLayout from "@/components/pages/DefaultLayout";
import useAlcoholEntries from "@/data-hooks/useAlcohoholEntries";
import useAuthOrRedirect from "@/data-hooks/useAuthOrRedirect";
import useSleepByDate from "@/data-hooks/useSleepByDate";
import { AuthInfo, AuthState, selectAuthInfo } from "@/store/slices/authSlice";
import axios from "axios";
import React, { useEffect } from "react";
import Plot from "react-plotly.js";
import { useSelector } from "react-redux";
import SleepDateRangeSelector from "@/components/organisms/SleepDateRangeSelector";
import { selectDateValue } from "@/store/slices/selectedDateSlice";
import useSleepByDateRage from "@/data-hooks/useSleepByDateRange";
import WeekStatsGraph from "@/components/organisms/WeekStatsGraph";
import { selectAlcoEntriesValue } from "@/store/slices/alcoEntriesSlice";
import filterAlcoEntries from "@/utils/filterAlcoEntries";

export default function Stats() {
  // Redux
  const authState: AuthState = useAuthOrRedirect();
  const dateRange = useSelector(selectDateValue);
  const alcoEntriesState = useSelector(selectAlcoEntriesValue);

  const result = filterAlcoEntries(
    dateRange.value.dateRange,
    alcoEntriesState.value.entries
  );

  // Data-hook
  const sleepEntries = useSleepByDateRage(
    authState.value,
    dateRange.value.dateRange
  );

  return (
    <DefaultLayout
      activePage={"/stats"}
      headerChildren={<SleepDateRangeSelector />}
    >
      {sleepEntries && (
        <WeekStatsGraph sleepEntries={sleepEntries} alcoEntries={result} />
      )}
    </DefaultLayout>
  );
}

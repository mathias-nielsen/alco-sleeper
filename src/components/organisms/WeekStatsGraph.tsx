import dynamic from "next/dynamic";
//@ts-ignore
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });
import { FitbitSleepDTO } from "@/types";
import { AlcoEntry } from "@/store/slices/alcoEntriesSlice";
import {
  calculateEntriesTrace,
  calculateQualityTrace,
  weekStatsGraphLayout,
} from "@/utils/weekStatsGraphHelpers";

interface WeekStatsGraphProps {
  sleepEntries: FitbitSleepDTO[];
  alcoEntries: AlcoEntry[];
}

const WeekStatsGraph = ({ sleepEntries, alcoEntries }: WeekStatsGraphProps) => {
  console.log("sleepEntries", sleepEntries);
  console.log("alcoEntries", alcoEntries);
  const data = [
    calculateQualityTrace(sleepEntries),
    calculateEntriesTrace(alcoEntries),
  ] as Plotly.Data[];

  console.log("plot data", data);

  const config = {
    displayModeBar: false,
    // staticPlot: true,
  } as Plotly.Config;

  return (
    <div>
      <Plot
        style={{ backgroundColor: "#F4EFF4", whiteSpace: "pre-wrap" }}
        data={data}
        layout={weekStatsGraphLayout}
        config={config}
      />
    </div>
  );
};

export default WeekStatsGraph;

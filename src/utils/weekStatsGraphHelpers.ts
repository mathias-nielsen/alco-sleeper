import { AlcoEntry } from "@/store/slices/alcoEntriesSlice";
import { FitbitSleepDTO } from "@/types";

interface PlotlyTrace extends Record<string, any> {
  x: string[]; //YYYY-MM-DD
  y: number[];
  type: string;
}

export const calculateEntriesTrace = (entries: AlcoEntry[]) => {
  return entries.reduce(
    (acc: PlotlyTrace, curr) => {
      const { date, total } = curr;
      acc.x.push(date);
      acc.y.push(total);
      return acc;
    },
    {
      yaxis: "y2",
      x: [], // Dates
      y: [], // Amount
      type: "bar",
    }
  );
};

export const calculateQualityTrace = (entries: FitbitSleepDTO[]) => {
  return [...entries].reverse().reduce(
    (acc: PlotlyTrace, curr) => {
      acc.x.push(curr.dateOfSleep);
      acc.y.push(curr.efficiency);
      return acc;
    },
    {
      x: [], // Dates
      y: [], // Score
      type: "scatter",
      mode: "lines",
      line: { shape: "vh" },
    }
  );
};

export const weekStatsGraphLayout = {
  width: 430,
  height: 400,
  margin: { t: 50, b: 50, l: 40, r: 40 },
  legend: { x: 0.4, y: 1.5 },
  xaxis: {
    type: "date",
    tickangle: -45,
    tickformat: "%d/%m",
    ticks: "outside",
    ticklen: 8,
    tickwidth: 1,
    tickmode: "linear",
  },
  yaxis: {
    range: [90, 100],
  },
  yaxis2: {
    range: [0, 10],
    overlaying: "y",
    side: "right",
  },
  paper_bgcolor: "#F4EFF4",
  plot_bgcolor: "#F4EFF4",
  bargap: 0.7,
} as any;

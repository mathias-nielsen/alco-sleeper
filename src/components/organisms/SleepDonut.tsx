import dynamic from "next/dynamic";
//@ts-ignore
const Plot = dynamic(() => import("react-plotly.js"), { ssr: false });
import { ColorPalette } from "@/types/colors";
import { FitbitSleepDTO } from "@/types";
import { minutesCalc } from "@/utils/minutesCalc";

interface SleepDonutProps {
  sleepData: FitbitSleepDTO;
}

/* Values here:
    awake: 3h 53m = 233
    rem: 1h 35m = 95
    light: 3h 53m = 233
    deep: 1h 26m = 86
 */

const SleepDonut = ({ sleepData }: SleepDonutProps) => {
  const calculateTotal = (sleepSum: number[]) => {
    const total = sleepSum.reduce((curr, acc) => {
      return acc + curr;
    }, 0);
    const [hours, minutes] = minutesCalc(total);

    return `${hours} h <br>${minutes} m`;
  };

  const calculateDataValues = (data: FitbitSleepDTO) => {
    const summary = data.levels.summary;
    return [
      summary.wake.minutes,
      summary.rem.minutes,
      summary.light.minutes,
      summary.deep.minutes,
    ];
  };

  const dataValues = calculateDataValues(sleepData);

  const data = [
    {
      values: dataValues,
      labels: ["Awake", "REM", "Light", "Deep"],
      hole: 0.8,
      type: "pie",
      domain: { column: 0 },
      marker: {
        colors: [
          ColorPalette.DARK_RED,
          ColorPalette.LIGHT_RED,
          ColorPalette.LIGHT_BLUE,
          ColorPalette.DARK_BLUE,
        ],
      },
      name: "What",
      hoverinfo: "",
      textposition: "none",
    },
  ];

  const layout = {
    height: 140,
    width: 140,
    showlegend: false,
    margin: { t: 0, b: 0, l: 0, r: 0 },
    paper_bgcolor: "#F4EFF4",
    plot_bgcolor: "#F4EFF4",
    annotations: [
      {
        font: {
          size: 20,
        },
        showarrow: false,
        text: calculateTotal(dataValues),
      },
    ],
  };

  const config = {
    displayModeBar: false,
  } as Plotly.Config;

  return (
    <div style={{ marginTop: "20px" }}>
      <Plot
        style={{ backgroundColor: "#F4EFF4", whiteSpace: "pre-wrap" }}
        //@ts-ignore
        data={data}
        layout={layout}
        config={config}
      />
    </div>
  );
};

export default SleepDonut;

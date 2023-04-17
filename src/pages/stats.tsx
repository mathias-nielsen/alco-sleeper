import ASDefaultLayout from "@/components/layouts/ASDefaultLayout";
import useAlcoholEntries from "@/data-hooks/useAlcohoholEntries";
import useSleepByDate from "@/data-hooks/useSleepByDate";
import { AuthInfo, selectAuthInfo } from "@/store/slices/authSlice";
import axios from "axios";
import React from "react";
import Plot from "react-plotly.js";
import { useSelector } from "react-redux";

export default function Stats() {
  const authState: AuthInfo = useSelector(selectAuthInfo);
  const result = useSleepByDate(authState);
  const entries = useAlcoholEntries();

  const handleClick = async () => {
    const result = await axios.post("/api/supabase/v1");
    console.log(result);
  };

  return (
    <ASDefaultLayout activePage={"/stats"}>
      <h1>Stats page</h1>
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: "scatter",
            mode: "lines+markers",
            marker: { color: "red" },
          },
          { type: "bar", x: [1, 2, 3], y: [2, 5, 3] },
        ]}
        layout={{ width: 320, height: 240, title: "A Fancy Plot" }}
      />
      <button onClick={handleClick}>Add drink</button>
    </ASDefaultLayout>
  );
}

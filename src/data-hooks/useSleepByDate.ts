import { AuthInfo } from "@/store/slices/authSlice";
import { useEffect, useState } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_FITBIT_API;

const useSleepByDate = (authState: AuthInfo, date: string = "2023-04-10") => {
  const [sleepByDate, setSleepByDate] = useState(undefined);
  useEffect(() => {
    function get() {
      fetch(`${BASE_URL}/1.2/user/-/sleep/date/${date}.json`, {
        headers: {
          authorization: "Bearer " + authState.access_token,
        },
      })
        .then((response) => response.json())
        .then((body) => {
          console.log(body);
          setSleepByDate(body);
        });
    }

    get();
    return sleepByDate;
  }, []);
};

export default useSleepByDate;

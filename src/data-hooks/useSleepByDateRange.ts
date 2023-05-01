import { AuthInfo } from "@/store/slices/authSlice";
import { useEffect, useState } from "react";
import { FitbitSleepDTO } from "@/types";

const BASE_URL = process.env.NEXT_PUBLIC_FITBIT_API;

interface FitbitResponse {
  sleep: FitbitSleepDTO[];
}

const useSleepByDateRage = (
  authState: AuthInfo,
  isoDates: string[]
): FitbitSleepDTO[] | undefined => {
  const [data, setData] = useState<FitbitSleepDTO[] | undefined>([]);

  useEffect(() => {
    async function get() {
      const body: FitbitResponse = await fetch(
        `${BASE_URL}/1.2/user/-/sleep/date/${isoDates[0]}/${isoDates[1]}.json`,
        {
          headers: {
            authorization: "Bearer " + authState.access_token,
          },
        }
      ).then((response) => {
        if (response.status !== 200) {
          return undefined;
        } else {
          return response.json();
        }
      });
      setData(body?.sleep ?? undefined);
    }

    get();
  }, [isoDates]);

  return data;
};

export default useSleepByDateRage;

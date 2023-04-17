import { AuthInfo } from "@/store/slices/authSlice";
import { useEffect, useState } from "react";

const BASE_URL = process.env.NEXT_PUBLIC_FITBIT_API;

export interface FitbitUser extends Record<string, any> {
  aboutMe: string;
  age: number;
  avatar150: string;
  displayName: string;
  weight: any;
}

const useProfileData = (authState: AuthInfo): FitbitUser | undefined => {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    async function get() {
      fetch(`${BASE_URL}/1/user/-/profile.json`, {
        headers: {
          authorization: "Bearer " + authState.access_token,
        },
      })
        .then((response) => response.json())
        .then((body) => setUser(body.user));
    }

    get();
  }, []);
  console.log(user);
  return user;
};

export default useProfileData;

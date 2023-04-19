import {
  AuthState,
  refetchAccessToken,
  selectAuthInfo,
} from "@/store/slices/authSlice";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

const useAuthOrRedirect = () => {
  const authState: AuthState = useSelector(selectAuthInfo);
  const router = useRouter();
  const dispatch = useDispatch<any>();

  useEffect(() => {
    console.log("reloading");
    if (!authState.value.access_token) {
      console.log("no token in memory");
      if (authState.triedRefetch) {
        console.log("tried");
        router.push("/auth");
      } else {
        console.log("dispatching refetch");
        dispatch(refetchAccessToken());
      }
    }
  }, [authState]);

  return authState;
};

export default useAuthOrRedirect;

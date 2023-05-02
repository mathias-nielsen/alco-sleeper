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
    if (!authState.value.access_token) {
      if (authState.triedRefetch) {
        router.push("/auth");
      } else {
        dispatch(refetchAccessToken());
      }
    }
  }, [authState]);

  return authState;
};

export default useAuthOrRedirect;

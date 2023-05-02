import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

export interface AuthState {
  triedRefetch: boolean;
  value: AuthInfo;
}

export interface AuthInfo {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string | "Bearer";
  user_id: string;
}

const initialState = {
  triedRefetch: false,
  value: {
    access_token: "",
    expires_in: 0,
    refresh_token: "",
    scope: "",
    token_type: "",
    user_id: "",
  },
} as AuthState;

export const refetchAccessToken = createAsyncThunk<AuthInfo | undefined>(
  "auth/refreshAuthInfo",
  async () => {
    const keysStr = localStorage.getItem("keys");
    if (keysStr) {
      const keys = JSON.parse(keysStr) as AuthInfo;
      const body = await fetch("https://api.fitbit.com/1.1/oauth2/introspect", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          accept: "application/json",
          Authorization: "Bearer " + keys.access_token,
        },
        body: "token=" + keys.access_token,
      }).then((response) => response.json());

      if (body.active) {
        return keys;
      }
    }
  }
);

// Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthInfo: (state: AuthState, action: PayloadAction<AuthInfo>) => {
      localStorage.setItem("keys", JSON.stringify(action.payload));
      state.value = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder.addCase(refetchAccessToken.fulfilled, (state: any, action: any) => {
      if (action.payload) {
        state.value = action.payload;
        state.triedRefetch = false;
      } else {
        state.triedRefetch = true;
        localStorage.removeItem("keys");
      }
    });
  },
});

export const { setAuthInfo } = authSlice.actions;
export const selectAuthInfo = (state: RootState): AuthState => state.auth;

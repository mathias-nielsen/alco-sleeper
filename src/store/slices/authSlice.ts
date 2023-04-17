import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthInfo {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
  token_type: string | "Bearer";
  user_id: string;
}

const initialState = {
  value: {
    access_token: "",
    expires_in: 0,
    refresh_token: "",
    scope: "",
    token_type: "",
    user_id: "",
  },
};

interface AuthState {
  value: AuthInfo;
}

// First, create the thunk
export const refreshAuthInfo = createAsyncThunk(
  "auth/refreshAuthInfo",
  async (client_id: string) => {
    const kingdom = localStorage.getItem("kingdom");
    if (kingdom) {
      const response = await fetch("https://api.fitbit.com/oauth2/token", {
        method: "POST",
        body:
          "grant_type=refresh_token" +
          `&refresh_token=${kingdom}` +
          `&client_id=${client_id}` +
          `&expires_in=${28800}`,
      });
      const body = await response.json();
      console.log("response", response);
      console.log("body", body);
      return [response, body];
    }
    return false;
  }
);

// Slice
export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthInfo: (state: AuthState, action: PayloadAction<AuthInfo>) => {
      localStorage.setItem("kingdom", action.payload.refresh_token);
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Case for refreshing auth/token info
    builder.addCase(refreshAuthInfo.fulfilled, (state, action) => {
      console.log(state, action.payload);
    });
  },
});

export const { setAuthInfo } = authSlice.actions;
export const selectAuthInfo = (state: any): AuthInfo => state.auth.value;

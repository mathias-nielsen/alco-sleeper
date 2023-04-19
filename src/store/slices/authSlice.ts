import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

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
};

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

export const refetchAccessToken = createAsyncThunk<AuthInfo | undefined>(
  "auth/refreshAuthInfo",
  async () => {
    const keysStr = localStorage.getItem("keys");
    console.log("trying to refetch token");
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
        console.log("token from memory active");
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
    refetchToken: (state: AuthState) => {
      const keysStr = localStorage.getItem("keys");
      state.triedRefetch = true;
      if (keysStr) {
        const keys = JSON.parse(keysStr);
        state.value = keys;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(refetchAccessToken.fulfilled, (state, action) => {
      if (action.payload) {
        state.value = action.payload;
        state.triedRefetch = false;
      } else {
        state.triedRefetch = true;
        localStorage.removeItem("keys");
        console.log("undefined");
      }
    });
  },
});

export const { setAuthInfo, refetchToken } = authSlice.actions;
export const selectAuthInfo = (state: any): AuthState => state.auth;

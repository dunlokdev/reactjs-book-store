import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
  user: {
    email: "",
    phone: "",
    fullName: "",
    role: "",
    avatar: "",
    id: "",
  },
};

export const accountSlice = createSlice({
  name: "counter",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    doLoginAction: (state, action) => {
      (state.isAuthenticated = true), (state.user = action.payload);
    },
    doGetAccountAction: (state, action) => {
      (state.isAuthenticated = true), (state.user = action.payload);
    },
  },
});

export const { doLoginAction, doGetAccountAction } = accountSlice.actions;

export default accountSlice.reducer;
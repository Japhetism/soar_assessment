import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../slices/profile/profileSlice";
import dashboardReducer from "../slices/dashboard/dashboardSlice";

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    dashboard: dashboardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

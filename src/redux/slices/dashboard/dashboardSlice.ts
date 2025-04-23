import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getRecentTransactions, getUserCards, getWeeklyActivities } from "./dashboardThunks";
import { initialDashboardState } from "../../../constants";
import { ICard, IDailyActivity, IRecentTransactions } from "../../../interfaces";


const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: initialDashboardState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUserCards.pending, (state) => {
        state.cards.loading = true;
        state.cards.error = null;
      })
      .addCase(getUserCards.fulfilled, (state, action: PayloadAction<ICard[]>) => {
        state.cards.loading = false;
        state.cards.data = action.payload;
      })
      .addCase(getUserCards.rejected, (state, action) => {
        state.cards.loading = false;
        state.cards.error = action.error.message ?? "Failed to fetch user card details";
      })
      .addCase(getRecentTransactions.pending, (state) => {
        state.recentTransactions.loading = true;
        state.recentTransactions.error = null;
      })
      .addCase(getRecentTransactions.fulfilled, (state, action: PayloadAction<IRecentTransactions[]>) => {
        state.recentTransactions.loading = false;
        state.recentTransactions.data = action.payload;
      })
      .addCase(getRecentTransactions.rejected, (state, action) => {
        state.recentTransactions.loading = false;
        state.recentTransactions.error = action.error.message ?? "Failed to fetch recent transaction";
      })
      .addCase(getWeeklyActivities.pending, (state) => {
        state.weeklyActivites.loading = true;
        state.weeklyActivites.error = null;
      })
      .addCase(getWeeklyActivities.fulfilled, (state, action: PayloadAction<IDailyActivity[]>) => {
        state.weeklyActivites.loading = false;
        state.weeklyActivites.data = action.payload;
      })
      .addCase(getWeeklyActivities.rejected, (state, action) => {
        state.weeklyActivites.loading = false;
        state.weeklyActivites.error = action.error.message ?? "Failed to fetch weekly activities";
      })
  },
});

export default dashboardSlice.reducer;

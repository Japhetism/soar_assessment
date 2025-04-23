import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getExpenseStatistics, getRecentTransactions, getUserCards, getWeeklyActivities } from "./dashboardThunks";
import { initialDashboardState } from "../../../constants";
import { ICard, IDailyActivity, IExpenseStatistics, IRecentTransactions } from "../../../interfaces";


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
      .addCase(getExpenseStatistics.pending, (state) => {
        state.expenseStatistics.loading = true;
        state.expenseStatistics.error = null;
      })
      .addCase(getExpenseStatistics.fulfilled, (state, action: PayloadAction<IExpenseStatistics>) => {
        state.expenseStatistics.loading = false;
        state.expenseStatistics.data = action.payload;
      })
      .addCase(getExpenseStatistics.rejected, (state, action) => {
        state.expenseStatistics.loading = false;
        state.expenseStatistics.error = action.error.message ?? "Failed to fetch expense statistics";
      })
  },
});

export default dashboardSlice.reducer;

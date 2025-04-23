import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICard, IDailyActivity, IExpenseStatistics, IRecentTransactions } from "../../../interfaces";
import { expenseStatistics, recentTransactions, userCards, weeklyActivites } from "../../../fixtures";
import { sortActivitiesByToday } from "../../../utils/helper";

export const getUserCards = createAsyncThunk<ICard[]>(
  "user/cards",
  async () => {
    const userCardData = await userCards;
    const response = {data: userCardData}
    return response.data;
  }
);

export const getRecentTransactions = createAsyncThunk<IRecentTransactions[]>(
  "transactions/recent",
  async () => {
    const recentTransactionData = await recentTransactions;
    const response = {data: recentTransactionData}
    return response.data;
  }
);

export const getWeeklyActivities = createAsyncThunk<IDailyActivity[]>(
  "activities?type=weekly",
  async () => {
    const weeklyActivityData = await weeklyActivites;
    const response = {data: sortActivitiesByToday(weeklyActivityData)}
    return response.data;
  }
);

export const getExpenseStatistics = createAsyncThunk<IExpenseStatistics>(
  "expense/statistics",
  async () => {
    const expenseStatisticData = await expenseStatistics;
    const response = {data: expenseStatisticData}
    return response.data;
  }
);

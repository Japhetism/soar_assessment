import { createAsyncThunk } from "@reduxjs/toolkit";
import { IBalanceHistory, ICard, IDailyActivity, IExpenseStatistics, IQuickTransfer, IRecentTransactions } from "../../../interfaces";
import { balanceHistory, expenseStatistics, quickTransfer, recentTransactions, userCards, weeklyActivites } from "../../../fixtures";
import { getBalanceUpToCurrentMonth, sortActivitiesByToday } from "../../../utils/helper";

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

export const getBalanceHistory = createAsyncThunk<{ [key in keyof IBalanceHistory]?: number }>(
  "balance/history",
  async () => {
    const balanceHistoryData = await getBalanceUpToCurrentMonth(balanceHistory);
    const response = {data: balanceHistoryData}
    return response.data;
  }
);

export const getQuickTransfer = createAsyncThunk<IQuickTransfer[]>(
  "transactions/quick",
  async () => {
    const quickTransferData = await quickTransfer;
    const response = {data: quickTransferData}
    return response.data;
  }
);

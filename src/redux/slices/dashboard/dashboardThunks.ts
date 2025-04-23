import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICard, IDailyActivity, IRecentTransactions } from "../../../interfaces";
import { recentTransactions, userCards, weeklyActivites } from "../../../fixtures";
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
  "user/transactions/recent",
  async () => {
    const recentTransactionData = await recentTransactions;
    const response = {data: recentTransactionData}
    return response.data;
  }
);

export const getWeeklyActivities = createAsyncThunk<IDailyActivity[]>(
  "user/activities?type=weekly",
  async () => {
    const weeklyActivityData = await weeklyActivites;
    const response = {data: sortActivitiesByToday(weeklyActivityData)}
    return response.data;
  }
);

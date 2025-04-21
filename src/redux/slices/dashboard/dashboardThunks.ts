import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICard, IRecentTransactions } from "../../../interfaces";
import { recentTransactions, userCards } from "../../../fixtures";

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

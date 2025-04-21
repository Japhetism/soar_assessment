import { createAsyncThunk } from "@reduxjs/toolkit";
import { ICard } from "../../../interfaces";
import { userCards } from "../../../fixtures";

export const getUserCards = createAsyncThunk<ICard[]>(
  "user/getCards",
  async () => {
    const userCardsData = await userCards;
    const response = {data: userCardsData}
    return response.data;
  }
);

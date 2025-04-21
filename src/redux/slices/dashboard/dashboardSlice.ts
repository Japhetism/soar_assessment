import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserCards } from "./dashboardThunks";
import { initialDashboardState } from "../../../constants";
import { ICard } from "../../../interfaces";


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
  },
});

export default dashboardSlice.reducer;

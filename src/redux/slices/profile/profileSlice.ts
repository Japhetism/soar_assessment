import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getProfile, updateProfile } from "./profileThunks";
import { initialState } from "../../../constants";
import { IProfile } from "../../../interfaces";


const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    clearProfile: (state) => {
      state.data = null;
      state.error = null;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfile.fulfilled, (state, action: PayloadAction<IProfile>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to fetch profile";
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action: PayloadAction<IProfile>) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Failed to update profile";
      });
  },
});

export const { clearProfile } = profileSlice.actions;
export default profileSlice.reducer;

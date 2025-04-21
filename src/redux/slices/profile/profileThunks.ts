import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProfile } from "../../../interfaces";
import { profileDataValues } from "../../../fixtures";

export const getProfile = createAsyncThunk<IProfile>(
  "user/getProfile",
  async () => {
    const profileData = await profileDataValues;
    const response = {data: profileData}
    return response.data;
  }
);
  
export const updateProfile = createAsyncThunk<IProfile, IProfile>(
  "user/updateProfile",
  async (profileData) => {
    const response = await {data: profileData};
    return response.data;
  }
);
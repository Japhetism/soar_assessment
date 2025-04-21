import { IDashboardState, IProfile, IProfileState } from "../interfaces";

export const defaultProfileValues: IProfile = {
  name: "",
  username: "",
  email: "",
  password: "",
  dateOfBirth: "",
  presentAddress: "",
  permanentAddress: "",
  city: "",
  country: "",
  postalCode: "",
}

export const initialProfileState: IProfileState = {
  data: null,
  loading: false,
  error: null,
};

export const initialDashboardState: IDashboardState = {
  cards: {
    data: [],
    loading: false,
    error: null,
  },
};
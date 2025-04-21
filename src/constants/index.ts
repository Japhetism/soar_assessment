import { IProfile, IProfileState } from "../interfaces";

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

export const initialState: IProfileState = {
  data: null,
  loading: false,
  error: null,
};
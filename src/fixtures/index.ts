import { ICard, IProfile } from "../interfaces";

export const profileDataValues: IProfile = {
  name: "James Doe",
  username: "JJD12334",
  email: "jamesdoe@gmail.com",
  password: "dhdhhdhdh@1236AHGD_",
  dateOfBirth: "01/01/1989",
  presentAddress: "Victoria, Island, Lagos",
  permanentAddress: "Victoria Island, Lagos",
  city: "Eti Osa",
  postalCode: "1101010",
  country: "Nigeria",
};

export const userCards: ICard[] = [
  {
    balance: 5756,
    name: "Eddy Cusuma",
    expiryDate: "12/22",
    number: "3778 **** **** 1234",
    type: "premium",
  },
  {
    balance: 5756,
    name: "Eddy Cusuma",
    expiryDate: "12/22",
    number: "3778 **** **** 1234",
    type: "standard"
  }
]
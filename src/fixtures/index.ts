import { ICard, IProfile, IRecentTransactions } from "../interfaces";

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

export const recentTransactions: IRecentTransactions[] = [
  {
    narration: "Deposit from my card",
    amount: -850,
    date: "01/28/2021",
    type: "card"
  },
  {
    narration: "Deposit PayPal",
    amount: 2500,
    date: "01/25/2021",
    type: "paypal"
  },
  {
    narration: "Jemi Wilson",
    amount: 5400,
    date: "01/21/2021",
    type: "self"
  }
]
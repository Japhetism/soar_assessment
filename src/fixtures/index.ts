import { IBalanceHistory, ICard, IDailyActivity, IExpenseStatistics, IProfile, IQuickTransfer, IRecentTransactions } from "../interfaces";
import UserImage2 from "../assets/images/user2.png";
import UserImage1 from "../assets/images/user1.png";
import UserImage3 from "../assets/images/user3.png";

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

export const weeklyActivites: IDailyActivity[] = [
  {
    day: "Saturday",
    deposit: 230,
    withdrawal: 490
  },
  {
    day: "Sunday",
    deposit: 120,
    withdrawal: 350
  },
  {
    day: "Monday",
    deposit: 280,
    withdrawal: 320
  },
  {
    day: "Tuesday",
    deposit: 380,
    withdrawal: 495
  },
  {
    day: "Wednesday",
    deposit: 230,
    withdrawal: 150
  },
  {
    day: "Thursday",
    deposit: 240,
    withdrawal: 395
  },
  {
    day: "Friday",
    deposit: 310,
    withdrawal: 400
  }
]

export const expenseStatistics: IExpenseStatistics = {
  entertainment: 30,
  billExpense: 15,
  investment: 20,
  others: 35
}

export const balanceHistory: IBalanceHistory = {
  january: 200,
  february: 500,
  march: 300,
  april: 400,
  may: 100,
  june: 500,
  july: 100,
  august: 250,
  september: 430,
  october: 800,
  november: 200,
  december: 580
}

export const quickTransfer: IQuickTransfer[] = [
  {
    id: "1",
    name: "Livia Bator",
    position: "CEO",
    profilePhoto: UserImage2
  },
  {
    id: "2",
    name: "Randy Press",
    position: "Director",
    profilePhoto: UserImage1
  },
  {
    id: "3",
    name: "Workman",
    position: "Designer",
    profilePhoto: UserImage3
  }
]
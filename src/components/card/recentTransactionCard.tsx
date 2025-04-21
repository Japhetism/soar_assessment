import React from "react";
import Loader from "../loader";
import Notification from "../Notification";
import { IRecentTransactions, IRecentTransactionCard, ICardListItem } from "../../interfaces";
import { formatDate, getRecentTransactionBgColor, getRecentTransactionIcon } from "../../utils/helper";

const CardListItem: React.FC<ICardListItem> = (
  {
    icon: Icon,
    narration,
    date,
    amount,
    bgColor
  }
) => {
  return (
    <div className="flex flex-row items-center justify-between mb-4">
      <div className={`flex items-center justify-center ${bgColor} w-[55px] h-[55px] rounded-full`}>
        {Icon && <Icon />}
      </div>

      <div className="flex-1 ml-4">
        <p className="text-[#232323] text-base font-inter font-medium">{narration}</p>
        <p className="text-[#718EBF] text-sm font-inter font-normal">{formatDate(date)}</p>
      </div>

      <div className="ml-4">
        <span className={`${amount >= 0 ? "text-[#41D4A8]" : "text-[#FF4B4A]"} text-base font-inter font-medium`}>
          {amount >= 0 ? `+$${amount.toLocaleString()}` : `-$${Math.abs(amount).toLocaleString()}`}
        </span>
      </div>
    </div>
  );
};

const RecentTransactionCard: React.FC<IRecentTransactionCard> = ({ title, transactions, isLoading, error }) => {
  if (isLoading) {
    return (
      <Loader />
    );
  }

  if (error) {
    return (
      <Notification message={error} isError={true} />
    );
  }

  if (!transactions || transactions.length === 0) {
    return (
      <div className="w-full bg-[#FFFFFF] rounded-[25px] px-6 py-4" style={{ textAlign: 'center', color: 'gray', padding: '20px' }}>
        <h3>No transactions available</h3>
      </div>
    );
  }

  return (
    <div>
      <div className={`mb-6`}>
        <span className={`text-[#343C6A] text-[22px] text-right ml-auto font-inter font-semibold`}>{title}</span>
      </div>

      <div className="w-full bg-[#FFFFFF] rounded-[25px] px-6 py-4">
        {transactions.map((transaction: IRecentTransactions, index: number) => (
          <CardListItem
            key={index}
            narration={transaction.narration}
            amount={transaction.amount}
            date={transaction.date}
            icon={getRecentTransactionIcon(transaction.type)}
            bgColor={getRecentTransactionBgColor(transaction.type)}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactionCard;

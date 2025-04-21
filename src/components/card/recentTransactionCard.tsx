import React from "react";
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
    <div className="flex flex-row items-center justify-between mb-2">
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

const RecentTransactionCard: React.FC<IRecentTransactionCard> = ({ transactions }) => {
  
  if (!transactions || transactions.length === 0) {
    return (
      <div className="w-full bg-[#FFFFFF] rounded-[25px] px-6 py-4" style={{ textAlign: 'center', color: 'gray', padding: '20px' }}>
        <h3>No transactions available</h3>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FFFFFF] rounded-[25px] py-3 px-4 flex flex-col gap-2.5">
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
  );
};

export default RecentTransactionCard;

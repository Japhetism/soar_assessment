import React from "react";
import CardChip from "../../assets/images/cardchip.png";
import BlackCardChip from "../../assets/images/cardchipblack.png";
import CARD_ICON_SVG from "../../assets/icons/cardIcon";
import { ICard } from "../../interfaces";

const Card: React.FC<ICard> = ({
  balance,
  name,
  expiryDate,
  number,
  type,
}) => {

  const extraClasses = type?.toLowerCase() === "premium" ? "bg-gradient-to-br from-[#5B5A6F] to-[#000000] text-white" : "bg-[#FFFFFF] text-[#343C6A]";
  const headerClasses = type?.toLowerCase() === "premium" ? "text-[#FFFFFFB2]" : "text-[#718EBF]";
  const valueClasses = type?.toLowerCase() === "premium" ? "text-[#FFFFFF]" : "text-[#343C6A]";
  const imageValue = type?.toLowerCase() === "premium" ? CardChip : BlackCardChip;

  return (
    <div className="w-full">
      <div className={`${extraClasses} rounded-[25px] shadow-lg`}>
        <div className="p-6 relative">
          <div className="flex justify-between items-center mb-5">
            <div>
              <p className={`${headerClasses} text-xs font-normal`}>Balance</p>
              <p className={`${valueClasses} text-xl font-semibold`}>${balance.toLocaleString()}</p>
            </div>
            <img src={imageValue} alt="" className="w-[34.77px] h-[34.77px]" />
          </div>
          <div className="flex flex-start space-x-12 text-gray-300">
            <div>
              <p className={`${headerClasses} text-xs font-normal uppercase`}>Card Holder</p>
              <p className={`${valueClasses} text-[15px] font-semibold`}>{name}</p>
            </div>
            <div>
              <p className={`${headerClasses} text-xs font-normal uppercase`}>Valid Thru</p>
              <p className={`${valueClasses} text-[15px] font-semibold`}>{expiryDate}</p>
            </div>
          </div>
        </div>
        <div className={`flex flex-row mb-4 justify-between ${extraClasses} ${type?.toLowerCase() !== "premium" ? "border-t-[1px] border-gray-100" : ""} p-6 rounded-b-[25px]`}>
          <p className={`${valueClasses} text-[22px] font-semibold`}>{number}</p>
          <CARD_ICON_SVG color="#9199AF" />
        </div>
      </div>
    </div>
  );
};

export default Card;

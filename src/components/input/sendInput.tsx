import SEND_SVG from "../../assets/icons/send";
import { ISendInput } from "../../interfaces";

const SendInput = ({
  label,
  onChange,
  handleSend,
}: ISendInput) => {
  
    return (
    <div className="w-full max-w-md mx-auto flex items-center gap-x-6">
      <label htmlFor="message" className="block text-[12px] lg:text-[16px] text-[#718EBF]">
        {label}
      </label>
      <div className="relative">
        <input
          type="number"
          id="amount"
          onChange={(e) => onChange(parseFloat(e.target.value))}
          className="w-full h-[50px] pr-14 lg:pr-16 pl-3 py-2 bg-[#EDF1F7] border border-[#EDF1F7] rounded-3xl shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          placeholder=""
        />
        <button
          onClick={handleSend}
          className="flex items-center justify-between absolute right-1 top-1 bottom-1 px-4 w-[100px] bg-[#232323] text-white text-[16px] font-medium rounded-full hover:bg-blue-600 transition-all"
        >
          Send
          <SEND_SVG color="#FFF" />
        </button>
      </div>
    </div>
  );
};

export default SendInput;

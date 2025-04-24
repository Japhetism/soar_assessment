import { useEffect, useState } from "react";
import HeaderText from "./headerText";
import Loader from "../../../components/loader";
import Notification from "../../../components/Notification";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { IQuickTransfer, IQuickTransferFormData } from "../../../interfaces";
import { getQuickTransfer } from "../../../redux/slices/dashboard/dashboardThunks";
import RIGHTARROW_SVG from "../../../assets/icons/rightArrow";
import SendInput from "../../../components/input/sendInput";
import { defaultQuickTransferFormData } from "../../../constants";
import { sendMoneySchema } from "../../../schemas";

const QuickTransfer = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.dashboard.quickTransfer);
    
  const [quickTransfers, setQuickTransfers] = useState<IQuickTransfer[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState<IQuickTransferFormData>(defaultQuickTransferFormData);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  
  useEffect(() => {
    dispatch(getQuickTransfer());
  }, [dispatch]);
      
  useEffect(() => {
    if (data) {
      setQuickTransfers(data);
    }
  }, [data]);
      
  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);

  const handleSendMoney = () => {
    setFormErrors({});
    const result = sendMoneySchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0]; 
        if (typeof field === "string") {
          fieldErrors[field] = err.message;
        }
      });
      setFormErrors(fieldErrors);
      return;
    }

    alert("Money sent successfully!");
    
  }
    
  if (loading) {
    return <Loader />
  }
  
  return (
    <>
      <HeaderText text="Quick Trasfer" />
      <div className="bg-[#fff] lg:h-[400px] rounded-lg p-4">
        {errorMessage && <Notification message={errorMessage} isError />}
        <div className="flex gap-x-6 lg:gap-x-12 p-2 lg:p-10 items-center">
          {quickTransfers?.map((user: IQuickTransfer, index: number) => (
            <button
              key={index} 
              className="flex flex-col items-center gap-y-2 lg:gap-y-4"
              onClick={() => setFormData({...formData, userId: user?.id})}
            >
              <img
                loading="lazy"
                alt={user?.name}
                src={user?.profilePhoto}
                className="w-[30px] lg:w-[70px] h-[30px] lg:h-[70px] rounded-full"
              />
              <div className="flex flex-col items-center">
                <p className={`text-[#232323] text-[12px] lg:text-[16px] ${formData?.userId === user?.id ? 'font-bold' : 'font-regular'}`}>{user?.name}</p>
                <p className={`text-[#718EBF] text-[10px] lg:text-[15px] ${formData?.userId === user?.id ? 'font-bold' : 'font-regular'}`}>{user?.position}</p>
              </div>
            </button>
          ))}

          <div className="ml-auto">
            <div className="w-12 h-12 flex items-center justify-center rounded-full shadow-lg bg-[#F5F7FA] hover:bg-[#e0e3e7] transition">
              <RIGHTARROW_SVG color="#718EBF" />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <SendInput
            label="Write Amount"
            onChange={(e) => setFormData({...formData, amount: e})}
            handleSend={handleSendMoney}
          />
        </div>

        <div className="mt-5 px-10">
          {Object.entries(formErrors).map(([field, error]) => (
            <ol key={field} className="list-disc text-red-500 ml-5">
              <li>{error}</li>
            </ol>
          ))}
        </div>
      </div>
    </>
  )
};

export default QuickTransfer;

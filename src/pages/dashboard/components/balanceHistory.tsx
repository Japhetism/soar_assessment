import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import HeaderText from "./headerText"
import Loader from "../../../components/loader";
import Notification from "../../../components/Notification";
import { IBalanceHistory } from "../../../interfaces";
import { getBalanceHistory } from "../../../redux/slices/dashboard/dashboardThunks";
import LineChart from "../../../components/charts/lineChart";

const BalanceHistory = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.dashboard.balanceHistory);
    
  const [balanceHistory, setBalanceHistory] = useState<{ [key in keyof IBalanceHistory]?: number } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  
  useEffect(() => {
    dispatch(getBalanceHistory());
  }, [dispatch]);
      
  useEffect(() => {
    if (data) {
      setBalanceHistory(data);
    }
  }, [data]);
      
  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);
    
  if (loading) {
    return <Loader />
  }

  return (
    <>
      <HeaderText text="Balance History" />
      <div className="bg-[#fff] rounded-lg p-4 w-full lg:h-[400px] overflow-x-auto scrollbar-hide-desktop">
        {errorMessage && <Notification message={errorMessage} isError />}
        <div className="min-w-[600px]">
          <LineChart
            title=""
            useGradientFill
            data={{
              labels: balanceHistory 
                ? Object.keys(balanceHistory).map(month => month.charAt(0).toUpperCase() + month.slice(1, 3).toLowerCase()) 
                : [],
              datasets: [
                {
                  label: 'Sales',
                  data: balanceHistory ? Object.values(balanceHistory) : [],
                  borderColor: '#1814F3',
                  fill: true,
                  tension: 0.4,
                  pointRadius: 0,
                  pointHoverRadius: 0,
                },
              ],
            }}
          />
        </div>
      </div>
    </>
  )
}

export default BalanceHistory
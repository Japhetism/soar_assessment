import { useEffect, useState } from "react";
import PieChart from "../../../components/charts/pieChart";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import HeaderText from "./headerText";
import { IExpenseStatistics } from "../../../interfaces";
import { getExpenseStatistics } from "../../../redux/slices/dashboard/dashboardThunks";

const ExpenseStatistics = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.dashboard.expenseStatistics);
    
  const [expenseStatistics, setExpenseStatistics] = useState<IExpenseStatistics | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    dispatch(getExpenseStatistics());
  }, [dispatch]);
    
  useEffect(() => {
    if (data) {
      setExpenseStatistics(data);
    }
  }, [data]);
    
  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);
  
  console.log("expense statistics ", data);
  
  return (
    <>
      <HeaderText text="Expense Statistics" />
      <div className="bg-[#fff] rounded-lg p-4 w-full lg:h-[450px] flex justify-center items-center">
        <div className="w-5/6">
          <PieChart
            labels={expenseStatistics ? Object.keys(expenseStatistics) : []}
            dataset={[
              {
                label: 'Expense Statistics',
                data: expenseStatistics ? Object.values(expenseStatistics) : [],
                backgroundColor: ['#343C6A', '#FC7900', '#396AFF', '#232323'],
                borderColor: "#FFF",
                borderWidth: 10,
              },
            ]}
          />
        </div>
      </div>
    </>
  )
}

export default ExpenseStatistics;
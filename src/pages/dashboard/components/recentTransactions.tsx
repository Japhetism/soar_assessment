import { useEffect, useState } from "react";
import { IRecentTransactions } from "../../../interfaces";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import HeaderText from "./headerText";
import { getRecentTransactions } from "../../../redux/slices/dashboard/dashboardThunks";
import Loader from "../../../components/loader";
import Notification from "../../../components/Notification";
import RecentTransactionCard from "../../../components/card/recentTransactionCard";

const RecentTransactions = () => {

  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.dashboard.recentTransactions);
  
  const [recentTransactions, setRecentTransactions] = useState<IRecentTransactions[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    dispatch(getRecentTransactions());
  }, [dispatch]);
    
  useEffect(() => {
    if (data) {
      setRecentTransactions(data);
    }
  }, [data]);
    
  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);
  
  console.log("recent transactions are ", data);

  if (loading) {
    return <Loader />
  }

  return (
    <>
      <HeaderText text="Recent Transactions" />
      {errorMessage && <Notification message={errorMessage} isError />}
      <div className="rounded-lg">
        {recentTransactions.length > 0 && <RecentTransactionCard transactions={recentTransactions} />}
      </div>
    </>
  )
}

export default RecentTransactions;
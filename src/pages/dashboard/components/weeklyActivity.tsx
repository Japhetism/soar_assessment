import { useEffect, useState } from "react";
import BarChart from "../../../components/charts/barChart";
import Loader from "../../../components/loader";
import HeaderText from "./headerText"
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { IDailyActivity } from "../../../interfaces";
import { getWeeklyActivities } from "../../../redux/slices/dashboard/dashboardThunks";
import { extractActivityData } from "../../../utils/helper";

const WeeklyActivity = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.dashboard.weeklyActivites);
  
  const [weeklyActivities, setWeeklyActivities] = useState<IDailyActivity[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    dispatch(getWeeklyActivities());
  }, [dispatch]);
    
  useEffect(() => {
    if (data) {
      setWeeklyActivities(data);
    }
  }, [data]);
    
  useEffect(() => {
    if (error) {
      setErrorMessage(error);
    }
  }, [error]);
  
  console.log("weekly activities  are ", data);

  if (loading) {
    return <Loader />
  }

  const weeklydata = extractActivityData(weeklyActivities);

  console.log("weekly data ", weeklydata);

  return (
    <>
      <HeaderText text="Weekly Activity" />
      <div className="bg-[#fff] rounded-lg p-4">
        <BarChart
          labels={weeklydata?.days}
          datasets={[
            {
              label: "Withdrawal",
              data: weeklydata?.withdrawals,
              backgroundColor: "#232323"
            },
            {
              label: "",
              data: [0, 0, 0, 0, 0, 0, 0],
              backgroundColor: "#FFF"
            },
            {
              label: "Deposit",
              data: weeklydata?.deposits,
              backgroundColor: "#396AFF"
            }
          ]}
        />
      </div>    
    </>
  )
}

export default WeeklyActivity;
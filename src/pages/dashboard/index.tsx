import ExpenseStatistics from "./components/expenseStatistics";
import HeaderText from "./components/headerText";
import RecentTransactions from "./components/recentTransactions";
import UserCards from "./components/userCards";
import WeeklyActivity from "./components/weeklyActivity";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        <div
          className="flex w-full lg:w-8/12 gap-4 lg:gap-10 overflow-x-auto lg:overflow-x-visible"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <UserCards />
        </div>
        <div className="w-full lg:w-4/12">
          <RecentTransactions />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mt-10">
        <div className="w-full lg:w-8/12">
          <WeeklyActivity />
        </div>
        <div className="w-full lg:w-4/12">
          <ExpenseStatistics />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-10">
        <div className="w-full lg:w-5/12">
          <HeaderText text="Quick Trasfer" />
          <div className="bg-[#fff] h-[250px] rounded-lg p-4">
            E
          </div>
        </div>
        <div className="w-full lg:w-7/12">
          <HeaderText text="Balance History" />
          <div className="bg-[#fff] h-[250px] rounded-lg p-4">
            F
          </div>
        </div>
      </div>
    </>
  )
}
    
export default Dashboard;
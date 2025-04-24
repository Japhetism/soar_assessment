import BalanceHistory from "./components/balanceHistory";
import ExpenseStatistics from "./components/expenseStatistics";
import QuickTransfer from "./components/quickTransfer";
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

      <div className="flex flex-col lg:flex-row items-start justify-between gap-10 mt-10">
        <div className="w-full lg:w-5/12">
          <QuickTransfer />
        </div>
        <div className="w-full lg:w-7/12">
          <BalanceHistory />
        </div>
      </div>
    </>
  )
}
    
export default Dashboard;
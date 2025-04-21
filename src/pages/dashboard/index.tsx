import HeaderText from "./components/headerText";
import UserCards from "./components/userCards";

const Dashboard: React.FC = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex w-full lg:w-8/12 gap-4 lg:gap-10 overflow-x-auto lg:overflow-x-visible">
          <UserCards />
        </div>
        <div className="w-full lg:w-4/12">
          <HeaderText text="Recent Transactions" />
          <div className="bg-[#fff] h-[250px] rounded-lg p-4">
            C
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-10">
        <div className="w-full lg:w-8/12">
          <HeaderText text="Weekly Activity" />
          <div className="bg-[#fff] h-[250px] rounded-lg p-4">
            C
          </div>
        </div>
        <div className="w-full lg:w-4/12">
          <HeaderText text="Expense Statistics" />
          <div className="bg-[#fff] h-[250px] rounded-lg p-4">
            D
          </div>
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
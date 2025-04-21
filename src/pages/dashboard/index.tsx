const Dashboard: React.FC = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <div className="flex w-full lg:w-8/12 gap-4 lg:gap-10 overflow-x-auto lg:overflow-x-visible">
          <div className="w-[320px] lg:w-full shrink-0 lg:shrink">
            <div className="mb-5">
              <span className="text-[#343C6A] text-[22px] font-inter font-semibold">My Card</span>
            </div>
            <div className="bg-[#fff] h-[250px] rounded-lg p-4">
              A
            </div>
          </div>
          <div className="w-[320px] lg:w-full shrink-0 lg:shrink">
            <div className="mb-7 flex lg:justify-end">
              <span className="text-[#343C6A] text-[17px] font-inter font-semibold">See All</span>
            </div>
            <div className="bg-[#fff] h-[250px] rounded-lg p-4">
              B
            </div>
          </div>
        </div>
        <div className="w-full lg:w-4/12">
          <div className="mb-5">
            <span className="text-[#343C6A] text-[22px] font-inter font-semibold">Recent Transactions</span>
          </div>
          <div className="bg-[#fff] h-[250px] rounded-lg p-4">
            C
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-10">
        <div className="w-full lg:w-8/12">
          <div className="mb-5">
            <span className="text-[#343C6A] text-[22px] font-inter font-semibold">Weekly Activity</span>
          </div>
          <div className="bg-[#fff] h-[250px] rounded-lg p-4">
            C
          </div>
        </div>
        <div className="w-full lg:w-4/12">
          <div className="mb-5">
            <span className="text-[#343C6A] text-[22px] font-inter font-semibold">Expense Statistics</span>
          </div>
          <div className="bg-[#fff] h-[250px] rounded-lg p-4">
            D
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mt-10">
        <div className="w-full lg:w-5/12">
          <div className="mb-5">
            <span className="text-[#343C6A] text-[22px] font-inter font-semibold">Quick Transfer</span>
          </div>
          <div className="bg-[#fff] h-[250px] rounded-lg p-4">
            E
          </div>
        </div>
        <div className="w-full lg:w-7/12">
          <div className="mb-5">
            <span className="text-[#343C6A] text-[22px] font-inter font-semibold">Balance History</span>
          </div>
          <div className="bg-[#fff] h-[250px] rounded-lg p-4">
            F
          </div>
        </div>
      </div>
    </>
  )
}
    
export default Dashboard;
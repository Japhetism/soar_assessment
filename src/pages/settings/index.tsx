import TabSelector from "../../components/tab";
import Profile from "./components/profile";

const tabs = [
  {
    title: "Edit Profile",
    route: "profile",
    content: <Profile />,
  },
  {
    title: "Preferences",
    route: "preferences",
    content: <div>This page under construction</div>
  },
  {
    title: "Security",
    route: "security",
    content: <div>This page under construction</div>
  }
]

const Settings: React.FC = () => {
  return (
    <div className="bg-[#FFFFFF] rounded-[25px] p-5 lg:px-10 lg:py-5 h-auto">
      <TabSelector
        tabs={tabs}
        initialRoute="profile"
      />
    </div>
  )
}
  
export default Settings;
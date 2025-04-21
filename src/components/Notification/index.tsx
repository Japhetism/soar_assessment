import { INotification } from "../../interfaces";

const Notification: React.FC<INotification> = ({ message, isError = false }) => {
  return (
    <div className={`${isError ? "bg-red-100" : "bg-green-100"} ${isError ? "text-red-500" : "text-green-500"} p-2 rounded-md mb-10`}>
      <h3>{message}</h3>
    </div>
  )
}

export default Notification;
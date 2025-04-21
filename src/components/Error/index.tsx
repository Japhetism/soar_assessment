import { IError } from "../../interfaces";

const ErrorComponent: React.FC<IError> = ({ error }) => {
  return (
    <div className="text-center text-red-500 p-5">
      <h3>Error: {error}</h3>
    </div>
  )
}

export default ErrorComponent;
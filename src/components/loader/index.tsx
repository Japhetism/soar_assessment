import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ILoader } from "../../interfaces";

const Loader: React.FC<ILoader> = ({ count = 12 }) => {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label="Loading content..."
      className="w-full bg-[#FFFFFF] rounded-[25px] px-6 py-4"
    >
      <Skeleton height="100%" count={count} />
    </div>
  )
}

export default Loader;
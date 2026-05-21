import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CarCardSkeleton = () => {

  return (
    <div className="border rounded-2xl p-4">

      <Skeleton height={220} />

      <Skeleton height={30} className="mt-4" />

      <Skeleton height={20} count={3} />

    </div>
  );
};

export default CarCardSkeleton;
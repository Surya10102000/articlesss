import { Skeleton } from "../ui/skeleton";

const SkeletonCard = () => {
  return (
    <div className="flex flex-col space-y-3 max-w-3xl mx-auto">
      <div className="space-y-8">
        <Skeleton className="h-[20px] w-[250px] rounded-md" />
        <Skeleton className="h-14 w-[550px]" />
      </div>
      <div className="space-y-6">
        <div className="space-y-3">
          <Skeleton className="h-4 w-10/12" />
          <Skeleton className="h-4 w-10/12" />
          <Skeleton className="h-4 w-10/12" />
          <Skeleton className="h-4 w-10/12" />
        </div>

        <div>
          <Skeleton className="h-[20px] w-[100px] rounded-md" />
        </div>
      </div>
      <div className="space-y-8">
        <Skeleton className="h-[20px] w-[250px] rounded-md" />
        <Skeleton className="h-14 w-[550px]" />
      </div>
      <div className="space-y-6">
        <div className="space-y-3">
          <Skeleton className="h-4 w-10/12" />
          <Skeleton className="h-4 w-10/12" />
          <Skeleton className="h-4 w-10/12" />
          <Skeleton className="h-4 w-10/12" />
        </div>

        <div>
          <Skeleton className="h-[20px] w-[100px] rounded-md" />
        </div>
      </div>
      <div className="space-y-8">
        <Skeleton className="h-[20px] w-[250px] rounded-md" />
        <Skeleton className="h-14 w-[550px]" />
      </div>
      <div className="space-y-6">
        <div className="space-y-3">
          <Skeleton className="h-4 w-10/12" />
          <Skeleton className="h-4 w-10/12" />
          <Skeleton className="h-4 w-10/12" />
          <Skeleton className="h-4 w-10/12" />
        </div>

        <div>
          <Skeleton className="h-[20px] w-[100px] rounded-md" />
        </div>
      </div>
    </div>
  );
};
export default SkeletonCard;

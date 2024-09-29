import { Skeleton } from "../ui/skeleton";

const BlogSkeleton = () => {
  return (
    <div className="max-w-2xl p-2 m-auto space-y-12">
      <div className="space-y-2">
        <Skeleton className="h-8 w-full"></Skeleton>
        <Skeleton className="h-8 w-11/12"></Skeleton>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-40 w-full"></Skeleton>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-40 w-full"></Skeleton>
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-4 w-full"></Skeleton>
        <Skeleton className="h-40 w-full"></Skeleton>
      </div>
    </div>
  );
};
export default BlogSkeleton;

import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function CryptoCardSkeleton() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center space-x-4">
          <Skeleton className="h-8 w-8 rounded-full" />
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-6 w-16" />
        </div>
        <div className="mt-6">
          <div className="flex items-baseline space-x-4">
            <Skeleton className="h-8 w-32" />
            <Skeleton className="h-6 w-20" />
            <Skeleton className="h-4 w-12" />
          </div>
          <Skeleton className="mt-2 h-4 w-24" />
        </div>
      </CardContent>
    </Card>
  );
}

import { useQuery } from "@tanstack/react-query";
import { fetchAppGraph } from "@/api/client";

export function useAppGraph(appId: string | null) {
  return useQuery({
    queryKey: ["apps", appId, "graph"],
    queryFn: () => fetchAppGraph(appId!),
    enabled: Boolean(appId),
    staleTime: 10_000,
  });
}

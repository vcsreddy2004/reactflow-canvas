import { useMemo, useState } from "react";
import AppSearch from "./AppSearch";
import AppListItem from "./AppListItem";
import { useApps } from "@/hooks/useApps";
import { Skeleton } from "@/components/ui/skeleton";

export default function AppList() {
  const [search, setSearch] = useState("");
  const { data: apps, isLoading, isError, error } = useApps();

  const filteredApps = useMemo(() => {
    if (!apps) return [];
    const query = search.trim().toLowerCase();
    if (!query) return apps;
    return apps.filter((app) => app.name.toLowerCase().includes(query));
  }, [apps, search]);

  if (isLoading) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-sm text-red-400">
        {error instanceof Error ? error.message : "Failed to load apps"}
      </p>
    );
  }

  return (
    <div>
      <h2 className="mb-4 text-sm font-semibold text-white">Applications</h2>
      <AppSearch value={search} onChange={setSearch} />
      <div className="space-y-1">
        {filteredApps.map((app) => (
          <AppListItem key={app.id} id={app.id} name={app.name} />
        ))}
        {filteredApps.length === 0 && (
          <p className="py-4 text-center text-sm text-zinc-500">No apps found</p>
        )}
      </div>
    </div>
  );
}

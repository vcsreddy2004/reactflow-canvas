import { ChevronDown, ChevronUp } from "lucide-react";
import { useApps } from "@/hooks/useApps";
import { useAppStore } from "@/store/useAppStore";
import { Skeleton } from "@/components/ui/skeleton";

interface Props {
  open: boolean;
  onToggle: () => void;
}

export default function AppDropdownHeader({ open, onToggle }: Props) {
  const selectedAppId = useAppStore((s) => s.selectedAppId);
  const { data: apps, isLoading } = useApps();

  const selectedApp = apps?.find((app) => app.id === selectedAppId);

  return (
    <button
      type="button"
      onClick={onToggle}
      className="flex h-11 w-full max-w-[420px] items-center justify-between rounded-lg border border-zinc-800 bg-zinc-950 px-4 text-sm text-white"
    >
      {isLoading ? (
        <Skeleton className="h-4 w-40" />
      ) : (
        <span>{selectedApp?.name ?? "Select application"}</span>
      )}
      {open ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
    </button>
  );
}

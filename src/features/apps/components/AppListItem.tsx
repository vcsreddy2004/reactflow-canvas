import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppStore } from "@/store/useAppStore";

interface AppListItemProps {
  id: string;
  name: string;
}

export default function AppListItem({ id, name }: AppListItemProps) {
  const selectedAppId = useAppStore((s) => s.selectedAppId);
  const setSelectedAppId = useAppStore((s) => s.setSelectedAppId);
  const isSelected = selectedAppId === id;

  return (
    <button
      type="button"
      onClick={() => setSelectedAppId(id)}
      className={cn(
        "flex w-full items-center justify-between rounded-md p-3 text-left text-sm transition-colors",
        isSelected
          ? "bg-blue-600/20 text-white ring-1 ring-blue-500/50"
          : "text-zinc-300 hover:bg-zinc-900",
      )}
    >
      <span>{name}</span>
      <ChevronRight size={16} className="text-zinc-500" />
    </button>
  );
}

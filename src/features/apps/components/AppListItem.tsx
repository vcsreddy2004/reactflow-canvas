import { ChevronRight } from "lucide-react";

interface AppListItemProps {
  name: string;
}

export default function AppListItem({
  name,
}: AppListItemProps) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        p-3
        rounded-md
        hover:bg-zinc-900
        cursor-pointer
      "
    >
      <span>{name}</span>

      <ChevronRight size={18} />
    </div>
  );
}
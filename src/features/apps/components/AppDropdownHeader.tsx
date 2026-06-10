import { ChevronDown, ChevronUp } from "lucide-react";

interface Props {
  open: boolean;
  onToggle: () => void;
}

export default function AppDropdownHeader({
  open,
  onToggle,
}: Props) {
  return (
    <button
      onClick={onToggle}
      className="
        w-[420px]
        h-14
        bg-zinc-950
        border
        border-zinc-800
        rounded-lg
        px-4
        flex
        items-center
        justify-between
      "
    >
      <span>supertokens-golang</span>

      {open ? (
        <ChevronUp size={18} />
      ) : (
        <ChevronDown size={18} />
      )}
    </button>
  );
}
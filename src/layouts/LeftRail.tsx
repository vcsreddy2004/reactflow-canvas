import { Box, Database, Home, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: Layers, label: "Graphs" },
  { icon: Database, label: "Data" },
  { icon: Box, label: "Services" },
];

export default function LeftRail() {
  return (
    <aside className="hidden w-16 shrink-0 flex-col items-center gap-6 border-r border-zinc-800 bg-zinc-950 py-4 md:flex">
      {navItems.map(({ icon: Icon, label, active }) => (
        <button
          key={label}
          type="button"
          aria-label={label}
          className={cn(
            "rounded-md p-2 text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-white",
            active && "bg-zinc-900 text-white",
          )}
        >
          <Icon size={20} />
        </button>
      ))}
    </aside>
  );
}

import {
  Home,
  Database,
  Box,
} from "lucide-react";

export default function LeftRail() {
  return (
    <aside className="w-16 border-r border-zinc-800 bg-zinc-950 flex flex-col items-center py-4 gap-6">
      <Home size={20} />
      <Database size={20} />
      <Box size={20} />
    </aside>
  );
}
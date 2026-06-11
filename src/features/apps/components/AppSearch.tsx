import { Search, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface AppSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function AppSearch({ value, onChange }: AppSearchProps) {
  return (
    <div className="mb-4 flex gap-2">
      <div className="relative flex-1">
        <Search
          size={16}
          className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-zinc-500"
        />
        <Input
          placeholder="Search apps..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border-zinc-700 bg-zinc-900 pl-9 text-white"
        />
      </div>
      <Button
        type="button"
        size="icon"
        className="shrink-0 bg-blue-600 hover:bg-blue-700"
        aria-label="Add app"
      >
        <Plus size={16} />
      </Button>
    </div>
  );
}

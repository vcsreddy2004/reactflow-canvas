import { Search, Plus } from "lucide-react";

export default function AppSearch() {
  return (
    <div className="flex gap-2 mb-5">
      <div className="flex-1 flex items-center bg-zinc-900 rounded-md px-3">
        <input
          placeholder="Search..."
          className="flex-1 bg-transparent outline-none py-2"
        />

        <Search size={18} />
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 px-3 rounded-md">
        <Plus size={18} />
      </button>
    </div>
  );
}
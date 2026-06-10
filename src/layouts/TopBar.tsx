export default function TopBar() {
  return (
    <header className="h-14 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-4">
      <h1 className="font-semibold text-white">
        App Graph Builder
      </h1>
      <div className="flex gap-2">
        <button className="px-3 py-1 rounded bg-zinc-800 text-sm">
          Fit
        </button>
        <button className="px-3 py-1 rounded bg-zinc-800 text-sm">
          Settings
        </button>
      </div>
    </header>
  );
}
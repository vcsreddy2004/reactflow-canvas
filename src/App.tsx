import TopBar from "./layouts/TopBar";
import LeftRail from "./layouts/LeftRail";
import RightPanel from "./layouts/RightPanel";
function App() {
  return (
    <div className="h-screen bg-black text-white">
      <TopBar />

      <div className="flex h-[calc(100vh-56px)]">
        <LeftRail />

        <main className="flex-1 relative">
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle,#333_1px,transparent_1px)]
              [background-size:24px_24px]
            "
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-zinc-500">
              ReactFlow Canvas Placeholder
            </p>
          </div>
        </main>
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
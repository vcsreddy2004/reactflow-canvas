import TopBar from "./layouts/TopBar";
import LeftRail from "./layouts/LeftRail";
import RightPanel from "./layouts/RightPanel";
import AppList from "./features/apps/components/AppList";
import GraphCanvas from "./features/graph/components/GraphCanvas";
import AppDropdownHeader from "./features/apps/components/AppDropdownHeader";
import { useState } from "react";

function App() {
  const [showApps, setShowApps] = useState(false);
  return (
    <div className="h-screen bg-black text-white">
      <TopBar />
      <AppDropdownHeader
        open={showApps}
        onToggle={() => setShowApps((prev) => !prev)}
      />
      {showApps && (
        <div className="mt-2">
          <AppList />
        </div>
      )}
      <div className="flex h-[calc(100vh-56px)]">
        <LeftRail />

        <main className="flex-1 relative">
          <GraphCanvas />
          <div
            className="
              absolute inset-0
              bg-[radial-gradient(circle,#333_1px,transparent_1px)]
              bg-size-[24px_24px]
            "
          />
        </main>
        <RightPanel />
      </div>
    </div>
  );
}

export default App;
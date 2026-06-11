import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TopBar from "./layouts/TopBar";
import LeftRail from "./layouts/LeftRail";
import RightPanel from "./layouts/RightPanel";
import GraphCanvas from "./features/graph/components/GraphCanvas";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex h-screen flex-col overflow-hidden bg-zinc-950 text-white">
        <TopBar />
        <div className="flex min-h-0 flex-1">
          <LeftRail />

          <main className="relative min-w-0 flex-1">
            <GraphCanvas />
          </main>

          <RightPanel />
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;

import { Maximize2, PanelRight, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useGraphBridge } from "@/store/useGraphBridge";
import { useAppStore } from "@/store/useAppStore";
import { setSimulateApiError, getSimulateApiError } from "@/api/client";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export default function TopBar() {
  const fitView = useGraphBridge((s) => s.fitView);
  const toggleMobilePanel = useAppStore((s) => s.toggleMobilePanel);
  const queryClient = useQueryClient();
  const [simulateError, setSimulateError] = useState(getSimulateApiError());
  const handleToggleError = () => {
    const next = !simulateError;
    setSimulateError(next);
    setSimulateApiError(next);
    void queryClient.invalidateQueries();
  };

  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-zinc-800 bg-zinc-950 px-4">
      <div className="flex items-center gap-3">
        <div className="flex size-8 items-center justify-center rounded-md bg-blue-600 text-sm font-bold text-white">
          AG
        </div>
        <h1 className="font-semibold text-white">App Graph Builder</h1>
      </div>

      <div className="flex items-center gap-2">
        <Button
          type="button"
          variant={simulateError ? "destructive" : "outline"}
          size="sm"
          onClick={handleToggleError}
          className="hidden border-zinc-700 sm:inline-flex"
        >
          <AlertTriangle size={14} />
          {simulateError ? "Errors on" : "Simulate error"}
        </Button>

        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={() => fitView?.()}
          className="border-zinc-700"
        >
          <Maximize2 size={14} />
          Fit
        </Button>

        <Button
          type="button"
          variant="outline"
          size="icon-sm"
          onClick={toggleMobilePanel}
          className="border-zinc-700 md:hidden"
          aria-label="Toggle panel"
        >
          <PanelRight size={16} />
        </Button>
      </div>
    </header>
  );
}

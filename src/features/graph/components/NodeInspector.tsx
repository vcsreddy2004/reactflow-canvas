import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import type { InspectorTab, ServiceStatus } from "../types/graph.types";
import {
  selectActiveInspectorTab,
  selectSelectedNodeId,
  useAppStore,
} from "@/store/useAppStore";
import { useGraphBridge } from "@/store/useGraphBridge";
import { cn } from "@/lib/utils";

const statusVariant: Record<
  ServiceStatus,
  "default" | "secondary" | "destructive"
> = {
  Healthy: "default",
  Degraded: "secondary",
  Down: "destructive",
};

function clampCpu(value: number): number {
  return Math.min(100, Math.max(0, Math.round(value)));
}

export default function NodeInspector() {
  const selectedNodeId = useAppStore(selectSelectedNodeId);
  const activeTab = useAppStore(selectActiveInspectorTab);
  const setActiveInspectorTab = useAppStore((s) => s.setActiveInspectorTab);
  const getNodeById = useGraphBridge((s) => s.getNodeById);
  const updateNodeData = useGraphBridge((s) => s.updateNodeData);

  const node = selectedNodeId && getNodeById ? getNodeById(selectedNodeId) : undefined;
  const data = node?.data;

  if (!selectedNodeId || !data) {
    return (
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4 text-sm text-zinc-400">
        Select a node on the canvas to inspect its configuration.
      </div>
    );
  }

  const handleTabChange = (value: string) => {
    setActiveInspectorTab(value as InspectorTab);
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-semibold text-white">Service Node</h3>
        <Badge variant={statusVariant[data.status]}>{data.status}</Badge>
      </div>

      <Tabs value={activeTab} onValueChange={handleTabChange}>
        <TabsList className="w-full">
          <TabsTrigger value="config" className="flex-1">
            Config
          </TabsTrigger>
          <TabsTrigger value="runtime" className="flex-1">
            Runtime
          </TabsTrigger>
        </TabsList>

        <TabsContent value="config" className="mt-4 space-y-4">
          <div className="space-y-2">
            <label htmlFor="node-name" className="text-xs font-medium text-zinc-400">
              Node name
            </label>
            <Input
              id="node-name"
              value={data.label}
              onChange={(e) =>
                updateNodeData?.(selectedNodeId, { label: e.target.value })
              }
              className="border-zinc-700 bg-zinc-900 text-white"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="node-description"
              className="text-xs font-medium text-zinc-400"
            >
              Description
            </label>
            <Textarea
              id="node-description"
              value={data.description ?? ""}
              onChange={(e) =>
                updateNodeData?.(selectedNodeId, { description: e.target.value })
              }
              rows={3}
              className="border-zinc-700 bg-zinc-900 text-white"
            />
          </div>

          <CpuControl
            key={selectedNodeId}
            cpu={data.cpu}
            onCpuChange={(value) =>
              updateNodeData?.(selectedNodeId, { cpu: value })
            }
          />
        </TabsContent>

        <TabsContent value="runtime" className="mt-4 space-y-3">
          <RuntimeField label="Uptime" value={data.uptime ?? "—"} />
          <RuntimeField label="Version" value={data.version ?? "—"} />
          <RuntimeField label="CPU" value={`${data.cpu}%`} />
          <div className="space-y-2">
            <span className="text-xs font-medium text-zinc-400">Status</span>
            <Badge variant={statusVariant[data.status]} className="w-fit">
              {data.status}
            </Badge>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function CpuControl({
  cpu,
  onCpuChange,
}: {
  cpu: number;
  onCpuChange: (value: number) => void;
}) {
  const [inputValue, setInputValue] = useState(String(cpu));

  const handleSlider = (values: number[]) => {
    const value = clampCpu(values[0] ?? 0);
    setInputValue(String(value));
    onCpuChange(value);
  };

  const handleInputChange = (raw: string) => {
    setInputValue(raw);
    const parsed = Number(raw);
    if (!Number.isNaN(parsed)) {
      onCpuChange(clampCpu(parsed));
    }
  };

  const handleInputBlur = () => {
    const parsed = Number(inputValue);
    const value = Number.isNaN(parsed) ? cpu : clampCpu(parsed);
    setInputValue(String(value));
    onCpuChange(value);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <label htmlFor="cpu-input" className="text-xs font-medium text-zinc-400">
          CPU usage (%)
        </label>
        <Input
          id="cpu-input"
          type="number"
          min={0}
          max={100}
          value={inputValue}
          onChange={(e) => handleInputChange(e.target.value)}
          onBlur={handleInputBlur}
          className="h-8 w-16 border-zinc-700 bg-zinc-900 text-center text-white"
        />
      </div>
      <Slider
        value={[cpu]}
        min={0}
        max={100}
        step={1}
        onValueChange={handleSlider}
      />
    </div>
  );
}

function RuntimeField({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-md border border-zinc-800 bg-zinc-900/50 px-3 py-2">
      <span className="text-xs text-zinc-400">{label}</span>
      <span className={cn("text-sm text-white")}>{value}</span>
    </div>
  );
}

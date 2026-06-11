import { Handle, Position, type NodeProps } from "@xyflow/react";
import { cn } from "@/lib/utils";
import type { ServiceNodeData, ServiceStatus } from "../types/graph.types";

const statusColors: Record<ServiceStatus, string> = {
  Healthy: "border-emerald-500/50 bg-emerald-950/30",
  Degraded: "border-amber-500/50 bg-amber-950/30",
  Down: "border-red-500/50 bg-red-950/30",
};

const statusDot: Record<ServiceStatus, string> = {
  Healthy: "bg-emerald-400",
  Degraded: "bg-amber-400",
  Down: "bg-red-400",
};

export default function ServiceNode({ data, selected }: NodeProps) {
  const nodeData = data as ServiceNodeData;

  return (
    <div
      className={cn(
        "min-w-[160px] rounded-lg border px-4 py-3 shadow-sm transition-shadow",
        statusColors[nodeData.status],
        selected && "ring-2 ring-blue-500 ring-offset-2 ring-offset-zinc-950",
      )}
    >
      <div className="flex items-center gap-2">
        <span
          className={cn("size-2 shrink-0 rounded-full", statusDot[nodeData.status])}
        />
        <h3 className="font-medium text-white">{nodeData.label}</h3>
      </div>
      <p className="mt-1 text-xs text-zinc-400">{nodeData.status}</p>

      <Handle type="target" position={Position.Top} className="!bg-zinc-500" />
      <Handle type="source" position={Position.Bottom} className="!bg-zinc-500" />
    </div>
  );
}

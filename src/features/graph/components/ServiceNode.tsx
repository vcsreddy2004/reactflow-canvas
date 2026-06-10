import { Handle, Position } from "@xyflow/react";

interface Props {
  data: {
    label: string;
    status: string;
  };
}

export default function ServiceNode({
  data,
}: Props) {
  return (
    <div className="bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 min-w-45">
      <h3 className="font-medium">
        {data.label}
      </h3>

      <p className="text-sm text-zinc-400">
        {data.status}
      </p>

      <Handle
        type="target"
        position={Position.Top}
      />

      <Handle
        type="source"
        position={Position.Bottom}
      />
    </div>
  );
}
import AppList from "@/features/apps/components/AppList";
import NodeInspector from "@/features/graph/components/NodeInspector";

export default function RightPanelContent() {
  return (
    <div className="flex h-full flex-col overflow-hidden">
      <div className="shrink-0 border-b border-zinc-800 p-4">
        <AppList />
      </div>
      <div className="flex-1 overflow-y-auto p-4">
        <NodeInspector />
      </div>
    </div>
  );
}

import { useCallback, useEffect } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
  type Node,
  type Edge,
  type OnNodesChange,
  type OnEdgesChange,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import ServiceNode from "./ServiceNode";
import { useAppGraph } from "@/hooks/useAppGraph";
import {
  selectSelectedAppId,
  selectSelectedNodeId,
  useAppStore,
} from "@/store/useAppStore";
import { useGraphBridge } from "@/store/useGraphBridge";
import type { ServiceNodeData } from "../types/graph.types";
import { Skeleton } from "@/components/ui/skeleton";

const nodeTypes = {
  service: ServiceNode,
};

function GraphInner() {
  const selectedAppId = useAppStore(selectSelectedAppId);
  const selectedNodeId = useAppStore(selectSelectedNodeId);
  const setSelectedNodeId = useAppStore((s) => s.setSelectedNodeId);
  const registerBridge = useGraphBridge((s) => s.registerBridge);
  const clearBridge = useGraphBridge((s) => s.clearBridge);

  const { data, isLoading, isError, error, refetch } = useAppGraph(selectedAppId);
  const { fitView } = useReactFlow();

  const [nodes, setNodes, onNodesChange] = useNodesState<Node<ServiceNodeData>>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<Edge>([]);

  useEffect(() => {
    if (!data) return;
    setNodes(data.nodes);
    setEdges(data.edges);
    setSelectedNodeId(null);
    requestAnimationFrame(() => {
      fitView({ padding: 0.2, duration: 300 });
    });
  }, [data, setNodes, setEdges, setSelectedNodeId, fitView]);

  useEffect(() => {
    setNodes((current) =>
      current.map((node) => ({
        ...node,
        selected: node.id === selectedNodeId,
      })),
    );
  }, [selectedNodeId, setNodes]);

  const updateNodeData = useCallback(
    (nodeId: string, patch: Partial<ServiceNodeData>) => {
      setNodes((current) =>
        current.map((node) =>
          node.id === nodeId
            ? { ...node, data: { ...node.data, ...patch } }
            : node,
        ),
      );
    },
    [setNodes],
  );

  const getNodeById = useCallback(
    (nodeId: string) => nodes.find((node) => node.id === nodeId),
    [nodes],
  );

  useEffect(() => {
    registerBridge({
      updateNodeData,
      getNodeById,
      fitView: () => fitView({ padding: 0.2, duration: 300 }),
    });
    return () => clearBridge();
  }, [registerBridge, clearBridge, updateNodeData, getNodeById, fitView]);

  const handleNodeClick = useCallback(
    (_: React.MouseEvent, node: Node<ServiceNodeData>) => {
      setSelectedNodeId(node.id);
    },
    [setSelectedNodeId],
  );

  const handlePaneClick = useCallback(() => {
    setSelectedNodeId(null);
  }, [setSelectedNodeId]);

  const handleNodesDelete = useCallback(
    (deleted: Node<ServiceNodeData>[]) => {
      if (deleted.some((node) => node.id === selectedNodeId)) {
        setSelectedNodeId(null);
      }
    },
    [selectedNodeId, setSelectedNodeId],
  );

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center p-8">
        <div className="w-full max-w-md space-y-3">
          <Skeleton className="h-4 w-1/3" />
          <Skeleton className="h-32 w-full" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 p-8 text-center">
        <p className="text-sm text-red-400">
          {error instanceof Error ? error.message : "Failed to load graph"}
        </p>
        <button
          type="button"
          onClick={() => void refetch()}
          className="rounded-md bg-zinc-800 px-3 py-1.5 text-sm text-white hover:bg-zinc-700"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange as OnNodesChange}
      onEdgesChange={onEdgesChange as OnEdgesChange}
      onNodeClick={handleNodeClick}
      onPaneClick={handlePaneClick}
      onNodesDelete={handleNodesDelete}
      deleteKeyCode={["Backspace", "Delete"]}
      fitView
      className="bg-zinc-950"
    >
      <Background variant={BackgroundVariant.Dots} gap={20} size={1} color="#333" />
      <Controls className="!bg-zinc-900 !border-zinc-700 [&>button]:!bg-zinc-800 [&>button]:!border-zinc-700 [&>button]:!fill-zinc-300" />
    </ReactFlow>
  );
}

export default function GraphCanvas() {
  return (
    <ReactFlowProvider>
      <div className="relative h-full w-full">
        <GraphInner />
      </div>
    </ReactFlowProvider>
  );
}

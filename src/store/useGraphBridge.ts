import { create } from "zustand";
import type { ServiceNode, ServiceNodeData } from "@/features/graph/types/graph.types";

interface GraphBridgeState {
  updateNodeData: ((nodeId: string, patch: Partial<ServiceNodeData>) => void) | null;
  getNodeById: ((nodeId: string) => ServiceNode | undefined) | null;
  fitView: (() => void) | null;
  registerBridge: (handlers: {
    updateNodeData: (nodeId: string, patch: Partial<ServiceNodeData>) => void;
    getNodeById: (nodeId: string) => ServiceNode | undefined;
    fitView: () => void;
  }) => void;
  clearBridge: () => void;
}

export const useGraphBridge = create<GraphBridgeState>((set) => ({
  updateNodeData: null,
  getNodeById: null,
  fitView: null,
  registerBridge: (handlers) =>
    set({
      updateNodeData: handlers.updateNodeData,
      getNodeById: handlers.getNodeById,
      fitView: handlers.fitView,
    }),
  clearBridge: () =>
    set({ updateNodeData: null, getNodeById: null, fitView: null }),
}));

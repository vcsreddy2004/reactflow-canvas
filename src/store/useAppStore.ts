import { create } from "zustand";
import type { InspectorTab } from "@/features/graph/types/graph.types";

interface AppState {
  selectedAppId: string | null;
  selectedNodeId: string | null;
  isMobilePanelOpen: boolean;
  activeInspectorTab: InspectorTab;
  setSelectedAppId: (appId: string | null) => void;
  setSelectedNodeId: (nodeId: string | null) => void;
  setMobilePanelOpen: (open: boolean) => void;
  toggleMobilePanel: () => void;
  setActiveInspectorTab: (tab: InspectorTab) => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedAppId: "supertokens-golang",
  selectedNodeId: null,
  isMobilePanelOpen: false,
  activeInspectorTab: "config",
  setSelectedAppId: (appId) =>
    set({ selectedAppId: appId, selectedNodeId: null }),
  setSelectedNodeId: (nodeId) => set({ selectedNodeId: nodeId }),
  setMobilePanelOpen: (open) => set({ isMobilePanelOpen: open }),
  toggleMobilePanel: () =>
    set((state) => ({ isMobilePanelOpen: !state.isMobilePanelOpen })),
  setActiveInspectorTab: (tab) => set({ activeInspectorTab: tab }),
}));

export const selectSelectedAppId = (state: AppState) => state.selectedAppId;
export const selectSelectedNodeId = (state: AppState) => state.selectedNodeId;
export const selectIsMobilePanelOpen = (state: AppState) =>
  state.isMobilePanelOpen;
export const selectActiveInspectorTab = (state: AppState) =>
  state.activeInspectorTab;

import type { Edge, Node } from "@xyflow/react";

export type ServiceStatus = "Healthy" | "Degraded" | "Down";

export type InspectorTab = "config" | "runtime";

export interface ServiceNodeData extends Record<string, unknown> {
  label: string;
  status: ServiceStatus;
  cpu: number;
  description?: string;
  uptime?: string;
  version?: string;
}

export type ServiceNode = Node<ServiceNodeData>;

export type ServiceEdge = Edge;

export interface AppGraph {
  nodes: ServiceNode[];
  edges: ServiceEdge[];
}

export interface AppSummary {
  id: string;
  name: string;
}

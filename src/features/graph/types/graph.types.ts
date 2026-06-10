import { type Node, type Edge } from "@xyflow/react";

export type ServiceStatus =
  | "Healthy"
  | "Degraded"
  | "Down";

export interface ServiceNodeData extends Record<string, unknown> {
  label: string;
  status: ServiceStatus;
  cpu: number;
  description?: string;
}

export type ServiceNode = Node<ServiceNodeData>;

export type ServiceEdge = Edge;
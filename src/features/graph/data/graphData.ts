import {
  type ServiceNode,
  type ServiceEdge,
} from "../types/graph.types";

export const initialNodes: ServiceNode[] = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: {
      label: "Redis",
      status: "Healthy",
      cpu: 25,
    },
    type: "service",
  },
  {
    id: "2",
    position: { x: 450, y: 100 },
    data: {
      label: "Postgres",
      status: "Healthy",
      cpu: 45,
    },
    type: "service",
  },
  {
    id: "3",
    position: { x: 250, y: 300 },
    data: {
      label: "MongoDB",
      status: "Down",
      cpu: 80,
    },
    type: "service",
  },
];

export const initialEdges: ServiceEdge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
  },
];
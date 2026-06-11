import type { AppGraph, AppSummary } from "@/features/graph/types/graph.types";

export const MOCK_APPS: AppSummary[] = [
  { id: "supertokens-golang", name: "supertokens-golang" },
  { id: "supertokens-java", name: "supertokens-java" },
  { id: "supertokens-python", name: "supertokens-python" },
  { id: "supertokens-ruby", name: "supertokens-ruby" },
  { id: "supertokens-go", name: "supertokens-go" },
];

const GRAPHS: Record<string, AppGraph> = {
  "supertokens-golang": {
    nodes: [
      {
        id: "1",
        position: { x: 100, y: 80 },
        data: {
          label: "API Gateway",
          status: "Healthy",
          cpu: 25,
          description: "Entry point for all requests",
          uptime: "99.9%",
          version: "2.1.0",
        },
        type: "service",
      },
      {
        id: "2",
        position: { x: 400, y: 80 },
        data: {
          label: "Auth Service",
          status: "Degraded",
          cpu: 62,
          description: "Handles authentication flows",
          uptime: "98.2%",
          version: "1.8.3",
        },
        type: "service",
      },
      {
        id: "3",
        position: { x: 250, y: 280 },
        data: {
          label: "Postgres",
          status: "Healthy",
          cpu: 45,
          description: "Primary database",
          uptime: "99.99%",
          version: "15.2",
        },
        type: "service",
      },
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2" },
      { id: "e2-3", source: "2", target: "3" },
    ],
  },
  "supertokens-java": {
    nodes: [
      {
        id: "1",
        position: { x: 120, y: 100 },
        data: {
          label: "Redis Cache",
          status: "Healthy",
          cpu: 18,
          description: "Session cache layer",
          uptime: "99.95%",
          version: "7.0",
        },
        type: "service",
      },
      {
        id: "2",
        position: { x: 420, y: 100 },
        data: {
          label: "Core API",
          status: "Healthy",
          cpu: 55,
          description: "Java core service",
          uptime: "99.8%",
          version: "4.2.1",
        },
        type: "service",
      },
      {
        id: "3",
        position: { x: 270, y: 300 },
        data: {
          label: "MongoDB",
          status: "Down",
          cpu: 0,
          description: "Document store",
          uptime: "0%",
          version: "6.0",
        },
        type: "service",
      },
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2" },
      { id: "e2-3", source: "2", target: "3" },
    ],
  },
  "supertokens-python": {
    nodes: [
      {
        id: "1",
        position: { x: 80, y: 120 },
        data: {
          label: "Worker",
          status: "Degraded",
          cpu: 78,
          description: "Background job processor",
          uptime: "97.1%",
          version: "3.0.0",
        },
        type: "service",
      },
      {
        id: "2",
        position: { x: 380, y: 120 },
        data: {
          label: "Queue",
          status: "Healthy",
          cpu: 32,
          description: "Message queue",
          uptime: "99.5%",
          version: "1.2.0",
        },
        type: "service",
      },
      {
        id: "3",
        position: { x: 230, y: 320 },
        data: {
          label: "Storage",
          status: "Healthy",
          cpu: 41,
          description: "Object storage",
          uptime: "99.9%",
          version: "2.4.0",
        },
        type: "service",
      },
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2" },
      { id: "e2-3", source: "2", target: "3" },
    ],
  },
  "supertokens-ruby": {
    nodes: [
      {
        id: "1",
        position: { x: 100, y: 90 },
        data: {
          label: "Web Server",
          status: "Healthy",
          cpu: 22,
          description: "Puma web server",
          uptime: "99.7%",
          version: "6.1",
        },
        type: "service",
      },
      {
        id: "2",
        position: { x: 400, y: 90 },
        data: {
          label: "Sidekiq",
          status: "Healthy",
          cpu: 48,
          description: "Background jobs",
          uptime: "99.4%",
          version: "7.2",
        },
        type: "service",
      },
      {
        id: "3",
        position: { x: 250, y: 290 },
        data: {
          label: "MySQL",
          status: "Degraded",
          cpu: 71,
          description: "Relational database",
          uptime: "96.0%",
          version: "8.0",
        },
        type: "service",
      },
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2" },
      { id: "e2-3", source: "2", target: "3" },
    ],
  },
  "supertokens-go": {
    nodes: [
      {
        id: "1",
        position: { x: 110, y: 110 },
        data: {
          label: "gRPC Server",
          status: "Healthy",
          cpu: 35,
          description: "gRPC entry point",
          uptime: "99.6%",
          version: "1.5.0",
        },
        type: "service",
      },
      {
        id: "2",
        position: { x: 410, y: 110 },
        data: {
          label: "Metrics",
          status: "Healthy",
          cpu: 12,
          description: "Prometheus exporter",
          uptime: "100%",
          version: "0.9.1",
        },
        type: "service",
      },
      {
        id: "3",
        position: { x: 260, y: 310 },
        data: {
          label: "Etcd",
          status: "Healthy",
          cpu: 28,
          description: "Distributed config",
          uptime: "99.99%",
          version: "3.5",
        },
        type: "service",
      },
    ],
    edges: [
      { id: "e1-2", source: "1", target: "2" },
      { id: "e2-3", source: "1", target: "3" },
    ],
  },
};

export function getMockGraph(appId: string): AppGraph | undefined {
  return GRAPHS[appId];
}

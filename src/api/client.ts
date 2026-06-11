import { getMockGraph, MOCK_APPS } from "@/api/mockData";
import type { AppGraph, AppSummary } from "@/features/graph/types/graph.types";

const LATENCY_MS = 600;

let simulateError = false;

export function setSimulateApiError(enabled: boolean): void {
  simulateError = enabled;
}

export function getSimulateApiError(): boolean {
  return simulateError;
}

function delay<T>(value: T, ms = LATENCY_MS): Promise<T> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (simulateError) {
        reject(new Error("Simulated API failure"));
        return;
      }
      resolve(value);
    }, ms);
  });
}

/** GET /apps */
export async function fetchApps(): Promise<AppSummary[]> {
  return delay([...MOCK_APPS]);
}

/** GET /apps/:appId/graph */
export async function fetchAppGraph(appId: string): Promise<AppGraph> {
  const graph = getMockGraph(appId);
  if (!graph) {
    await delay(null);
    throw new Error(`App not found: ${appId}`);
  }
  return delay({
    nodes: graph.nodes.map((node) => ({
      ...node,
      data: { ...node.data },
    })),
    edges: graph.edges.map((edge) => ({ ...edge })),
  });
}

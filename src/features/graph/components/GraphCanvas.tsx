import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  BackgroundVariant,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";

import ServiceNode from "./ServiceNode";

import {
  initialNodes,
  initialEdges,
} from "../data/graphData";

const nodeTypes = {
  service: ServiceNode,
};

export default function GraphCanvas() {
  return (
    <ReactFlow
      nodes={initialNodes}
      edges={initialEdges}
      nodeTypes={nodeTypes}
      fitView
    >
      <Background
        variant={BackgroundVariant.Dots}
      />

      <Controls />

      <MiniMap />
    </ReactFlow>
  );
}
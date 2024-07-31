"use client";
import React from "react";
import Image from "next/image";

import { Handle, Position } from "@xyflow/react";

import { CustomNodeProps } from "./CustomNode.types";

const CustomNode: React.FC<CustomNodeProps> = ({ data }) => {
  return (
    <div className="bg-gray-900 p-4 shadow-md rounded-lg text-center border-2 border-yellow-500">
      <Image
        src={data.imageUrl}
        alt={data.label}
        width={64}
        height={64}
        className="w-16 h-16 mx-auto rounded-full border-2 border-yellow-500"
      />
      <div className="mt-2 text-white">{data.label}</div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-2 h-2 bg-yellow-500"
      />
      <Handle
        type="target"
        position={Position.Top}
        className="w-2 h-2 bg-yellow-500"
      />
    </div>
  );
};

export default CustomNode;

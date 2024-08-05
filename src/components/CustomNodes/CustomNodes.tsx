"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Handle, Position } from "@xyflow/react";

import { CustomNodesProps } from "./CustomNodes.types";

const CustomNodes: React.FC<CustomNodesProps> = ({ data }) => {
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <div className="w-28 p-4 rounded shadow bg-stone-900 bg-opacity-90 flex flex-col gap-3 items-center">
      <Image
        src={hasImageError ? "/images/no-image.webp" : data.imageUrl}
        alt={data.name}
        width={80}
        height={80}
        className="rounded-full w-20 h-20 object-cover"
        onError={() => setHasImageError(true)}
      />
      <p className="w-full mt-2 text-xs overflow-hidden text-ellipsis whitespace-nowrap">
        {data.name}
      </p>
      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
    </div>
  );
};

export default CustomNodes;

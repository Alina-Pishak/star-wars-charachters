"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Handle, Position } from "@xyflow/react";

import { CustomNodeProps } from "./CustomNode.types";

const CustomNode: React.FC<CustomNodeProps> = ({
  data: {
    name,
    height,
    hair_color,
    eye_color,
    birth_year,
    gender,
    imageUrl = "../../../public/images/no-image.webp",
  },
}) => {
  const characterTraits = [
    { value: name, property: "Name" },
    { value: height, property: "Height" },
    { value: hair_color, property: "Hair" },
    { value: eye_color, property: "Eye color" },
    { value: birth_year, property: "Birthday year" },
    { value: gender, property: "Gender" },
  ];
  const [hasImageError, setHasImageError] = useState(false);

  return (
    <div className="p-4 rounded shadow bg md:p-6">
      <div className="flex gap-4">
        <Image
          src={hasImageError ? "/images/no-image.webp" : imageUrl}
          alt={name}
          width={176}
          height={176}
          className="rounded-full w-44 h-44 object-cover mb-3 md:w-56 md:h-56 xl:w-80 xl:h-80"
          onError={() => setHasImageError(true)}
        />

        <ul>
          {characterTraits.map((trait, index) => (
            <li
              key={index}
              className="text-xs text-stone-300 mb-3 md:text-base"
            >
              <span className="mr-2 font-bold">{trait.property}:</span>
              <span>{trait.value}</span>
            </li>
          ))}
        </ul>
      </div>
      <p className="mt-2 md:text-xl font-bold">{name}</p>
      <Handle type="source" position={Position.Bottom} />
      <Handle type="target" position={Position.Top} />
    </div>
  );
};

export default CustomNode;

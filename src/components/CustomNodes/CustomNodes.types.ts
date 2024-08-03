import { NodeProps } from "@xyflow/react";

export interface CustomNodesProps extends NodeProps {
  data: {
    eye_color: string;
    gender: string;
    hair_color: string;
    height: string;
    mass: string;
    name: string;
    imageUrl: string;
    birth_year: string;
  };
}

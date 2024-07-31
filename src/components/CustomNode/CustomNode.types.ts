import { NodeProps } from "@xyflow/react";

export interface CustomNodeProps extends NodeProps {
  data: {
    label: string;
    imageUrl: string;
  };
}

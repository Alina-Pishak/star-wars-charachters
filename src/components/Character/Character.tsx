"use client";
import { FC, useEffect, useState } from "react";
import Link from "next/link";

import { ReactFlow } from "@xyflow/react";

import CustomNode from "../CustomNode";
import CustomNodes from "../CustomNodes";

import { makeEdges, makeNodes } from "@/utils";

import { ICharacterProps } from "./Character.types";

import "@xyflow/react/dist/style.css";

const nodeTypes = { customNode: CustomNode, customNodes: CustomNodes };

const Character: FC<ICharacterProps> = ({ character, films, starships }) => {
  const [isMobile, setIsMobile] = useState(true);
  const [isTablet, setIsTablet] = useState(true);

  const nodes = makeNodes(character, films, starships, isMobile, isTablet);
  const edges = makeEdges(films, starships);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      setIsTablet(window.innerWidth < 1024 && window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="container" style={{ height: "100vh", width: "100%" }}>
      <Link href="/characters" className="mb-5 mt-2">
        <p className="text-xs text-stone-400">Back</p>
      </Link>
      <ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} />
    </section>
  );
};

export default Character;

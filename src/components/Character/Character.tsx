import { FC } from "react";

import { ICharacterProps } from "./Character.types";
import { ReactFlow } from "@xyflow/react";

import CustomNode from "../CustomNode/CustomNode";

import "@xyflow/react/dist/style.css";
import { getFilms } from "@/actions/getFilms";
import { getStarships } from "@/actions/getStarships";
import Link from "next/link";

const nodeTypes = { customNode: CustomNode };

const Character: FC<ICharacterProps> = ({
  character: { id, name },
  films,
  starships,
}) => {
  const heroNode = {
    id: "hero",
    data: {
      label: name,
      imageUrl: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
    },
    position: { x: 250, y: 0 },
    type: "customNode",
  };

  const filmNodes = films.map((film, index) => ({
    id: `film-${index}`,
    data: {
      label: film.title,
      imageUrl: `https://starwars-visualguide.com/assets/img/films/${film.id}.jpg`,
    },
    position: { x: 100, y: 100 + index * 100 },
    type: "customNode",
  }));

  const shipNodes = starships.map((ship, index) => ({
    id: `ship-${index}`,
    data: {
      label: ship.name,
      imageUrl: `https://starwars-visualguide.com/assets/img/starships/${ship.id}.jpg`,
    },
    position: { x: 400, y: 100 + index * 100 },
    type: "customNode",
  }));

  const filmEdges = films.map((_, index) => ({
    id: `hero-film-${index}`,
    source: "hero",
    target: `film-${index}`,
  }));

  const shipEdges = starships.map((_, index) => ({
    id: `film-ship-${index}`,
    source: `film-${Math.floor(index / 2)}`,
    target: `ship-${index}`,
  }));

  return (
    <div
      className="bg-black h-screen w-full flex items-center justify-center"
      style={{ height: "100vh", width: "100%" }}
    >
      <Link href="/characters" className="text-white">
        All Characters
      </Link>
      <ReactFlow
        nodes={[heroNode, ...filmNodes, ...shipNodes]}
        edges={[...filmEdges, ...shipEdges]}
        nodeTypes={nodeTypes}
      />
    </div>
  );
};

export default Character;

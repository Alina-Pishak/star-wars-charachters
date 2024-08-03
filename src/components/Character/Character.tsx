import { FC } from "react";
import Link from "next/link";

import { ReactFlow } from "@xyflow/react";

import CustomNode from "../CustomNode";
import CustomNodes from "../CustomNodes";
import Icon from "../../../public/icons/Arrow.svg";

import { ICharacterProps } from "./Character.types";

import "@xyflow/react/dist/style.css";

const nodeTypes = { customNode: CustomNode, customNodes: CustomNodes };

const Character: FC<ICharacterProps> = ({
  character: { id, name, height, hair_color, eye_color, birth_year, gender },
  films,
  starships,
}) => {
  const heroNode = {
    id: "hero",
    data: {
      name,
      height,
      hair_color,
      eye_color,
      birth_year,
      gender,
      imageUrl: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
    },
    position: { x: 0, y: 0 },
    type: "customNode",
  };

  const filmNodes = films.map((film, index) => ({
    id: `film-${index}`,
    data: {
      name: film.title,
      imageUrl: `https://starwars-visualguide.com/assets/img/films/${film.id}.jpg`,
    },
    position: { x: 0, y: (index + 2) * 170 },
    type: "customNodes",
  }));

  const shipNodes = starships.map((ship, index) => ({
    id: `ship-${index}`,
    data: {
      name: ship.name,
      imageUrl: `https://starwars-visualguide.com/assets/img/starships/${ship.id}.jpg`,
    },
    position: { x: 200, y: (index + 2) * 200 },
    type: "customNodes",
  }));

  const filmEdges = films.map((_, index) => ({
    id: `hero-film-${index}`,
    source: "hero",
    target: `film-${index}`,
  }));

  const shipEdges = starships.map((_, index) => ({
    id: `film-ship-${index}`,
    source: `film-${Math.floor(index / 2)}w`,
    target: `ship-${index}`,
  }));
  return (
    <section className="container" style={{ height: "100vh", width: "100%" }}>
      <Link href="/characters" className="flex gap-1 items-center mb-5 mt-2">
        <Icon width={18} height={18} className="stroke-stone-400 rotate-180" />
        <p className="text-xs text-stone-400">Back</p>
      </Link>
      <ReactFlow
        nodes={[heroNode, ...filmNodes, ...shipNodes]}
        edges={[...filmEdges, ...shipEdges]}
        nodeTypes={nodeTypes}
        style={{
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
        }}
      />
    </section>
  );
};

export default Character;

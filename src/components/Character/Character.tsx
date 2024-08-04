"use client";
import { FC, useEffect, useState } from "react";
import Link from "next/link";

import { ReactFlow, useReactFlow } from "@xyflow/react";

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
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth > 768 ? false : true);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const findFilmSources = (starship: number) => {
    const film =
      films
        .find(({ starships }) => starships.includes(starship))
        ?.id.toString() || "hero";
    return `film-${film}`;
  };

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
    id: `film-${film.id}`,
    data: {
      name: film.title,
      imageUrl: `https://starwars-visualguide.com/assets/img/films/${film.id}.jpg`,
    },
    position: {
      x: isMobile ? 0 : (index + 3) * 150,
      y: isMobile ? (index + 2) * 200 : 0,
    },
    type: "customNodes",
  }));

  const shipNodes = starships.map((ship, index) => ({
    id: `ship-${ship.id}`,
    data: {
      name: ship.name,
      imageUrl: `https://starwars-visualguide.com/assets/img/starships/${ship.id}.jpg`,
    },
    position: {
      x: isMobile ? 200 : (index + 3) * 150,
      y: isMobile ? (index + 2) * 200 : 300,
    },
    type: "customNodes",
  }));

  const filmEdges = films.map((film, index) => ({
    id: `hero-film-${index}`,
    source: "hero",
    target: `film-${film.id}`,
  }));

  const shipEdges = starships.map((starship, index) => ({
    id: `film-ship-${index}`,
    source: findFilmSources(starship.id),

    target: `ship-${starship.id}`,
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

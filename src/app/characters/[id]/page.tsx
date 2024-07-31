"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { ReactFlow, Node, Edge } from "@xyflow/react";
import { getCharacterById } from "@/actions/getCharacterById";
import "@xyflow/react/dist/style.css";

export default function Character({ params }) {
  // const router = useRouter();
  const { id } = params;

  const [hero, setHero] = useState(null);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);

  useEffect(() => {
    if (id) {
      const loadHero = async () => {
        const data = await getCharacterById(id as string);
        console.log(data);
        setHero(data);

        const heroNode: Node = {
          id: data.id,
          data: { label: data.name },
          position: { x: 250, y: 25 },
        };

        const filmNodes = data.films.map((film, index) => ({
          id: `film-${film}`,
          data: { label: "film.title" },
          position: { x: 100, y: 150 + index * 100 },
        }));

        const starshipNodes = data.starships.map((starship, index) => ({
          id: `starship-${starship}`,
          data: { label: "starship.name" },
          position: { x: 400, y: 150 + index * 100 },
        }));

        const filmEdges = data.films.map((film) => ({
          id: `edge-${data.id}-${film}`,
          source: data.id,
          target: `film-${film}`,
        }));

        const starshipEdges = data.starships.map((starship) => ({
          id: `edge-${data.id}-${starship}`,
          source: data.id,
          target: `starship-${starship}`,
        }));

        setNodes([heroNode, ...filmNodes, ...starshipNodes]);
        setEdges([...filmEdges, ...starshipEdges]);
      };
      loadHero();
    }
  }, [id]);

  if (!hero) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">{hero.name}</h1>
      <div className="flex items-center mb-6">
        <Image
          src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
          alt={hero.name}
          width={100}
          height={100}
          className="rounded-full mr-6 border-2 border-yellow-400"
        />
        <div>
          <p className="text-lg">Films:</p>
          <ul className="list-disc pl-6">
            {hero.films.map((film) => (
              <li key={film} className="text-yellow-400">
                {film}
              </li>
            ))}
          </ul>
          <p className="text-lg mt-4">Starships:</p>
          <ul className="list-disc pl-6">
            {hero.starships.map((starship) => (
              <li key={starship} className="text-yellow-400">
                {starship}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div style={{ height: 500 }}>
        <ReactFlow nodes={nodes} edges={edges} />
      </div>
    </div>
  );
}

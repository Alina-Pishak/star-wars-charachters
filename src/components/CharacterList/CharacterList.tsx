"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { getCharacters } from "@/actions";

import { ICharacter } from "./CharacterList.types";

const CharacterList = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const loadCharacters = async () => {
      const data = await getCharacters(page);
      console.log(data);
      setCharacters(data.results);
      setTotalPages(Math.ceil(data.count / data.results.length));
    };
    loadCharacters();
  }, [page]);
  return (
    <div className="container mx-auto p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-yellow-400">
        Star Wars characters
      </h1>
      <ul className="space-y-4">
        {characters.map((character) => (
          <li
            key={character.id}
            className="p-4 bg-gray-800 rounded shadow flex items-center"
          >
            <Image
              src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
              alt={character.name}
              width={50}
              height={50}
              className="rounded-full mr-4 border-2 border-yellow-400"
            />
            <div>
              <Link
                href={`/characters/${character.id}`}
                className="text-yellow-400 hover:text-yellow-300 text-lg"
              >
                {character.name}
              </Link>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex justify-between items-center mt-6">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-yellow-400 text-gray-900 rounded disabled:opacity-50 hover:bg-yellow-300"
        >
          Previous
        </button>
        <span className="text-sm text-yellow-400">
          Page {page} of {totalPages}
        </span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="px-4 py-2 bg-yellow-400 text-gray-900 rounded disabled:opacity-50 hover:bg-yellow-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CharacterList;

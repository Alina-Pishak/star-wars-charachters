"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { getCharacters } from "@/actions";

import CharacterListItem from "../CharacterListItem";

import { IApiCharactersResponse } from "./CharacterList.types";
import { ICharacter } from "../Character/Character.types";

const CharacterList = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [hasImageError, setHasImageError] = useState(false);

  useEffect(() => {
    const loadCharacters = async () => {
      const data = await getCharacters<IApiCharactersResponse>(page);
      setCharacters(data.results);
      setTotalPages(Math.ceil(data.count / data.results.length));
    };
    loadCharacters();
  }, [page]);
  return (
    <section className="container mx-auto text-white min-h-screen">
      <Link href="/" className=" mb-5 mt-2">
        <p className="text-xs text-stone-400">Back</p>
      </Link>
      <h1 className="text-xl font-bold mb-6 uppercase text-center">
        Star Wars: Characters
      </h1>
      <ul className="flex flex-wrap gap-3 mb-5 justify-center">
        {characters.map((character) => (
          <CharacterListItem
            key={character.id}
            character={character}
            hasImageError={hasImageError}
            setHasImageError={setHasImageError}
          />
        ))}
      </ul>
      <ul className="flex justify-center gap-2">
        {Array.from(Array(totalPages).keys()).map((number) => (
          <li key={number}>
            <button
              type="button"
              onClick={() => setPage(number + 1)}
              className="bg text-xs p-1 rounded-full w-7 h-7 md:text-sm md:w-10 md:h-10"
            >
              {Number(number) + 1}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CharacterList;

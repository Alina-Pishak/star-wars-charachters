"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { getCharacters } from "@/actions";

import { IApiCharactersResponse } from "./CharacterList.types";
import { ICharacter } from "../Character/Character.types";

import Icon from "../../../public/icons/Arrow.svg";

const CharacterList = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const loadCharacters = async () => {
      const data = await getCharacters<IApiCharactersResponse>(page);
      console.log(data);
      setCharacters(data.results);
      setTotalPages(Math.ceil(data.count / data.results.length));
    };
    loadCharacters();
  }, [page]);
  return (
    <section className="container mx-auto text-white min-h-screen">
      <Link href="/" className="flex gap-1 items-center mb-5 mt-2">
        <Icon width={18} height={18} className="stroke-stone-400 rotate-180" />
        <p className="text-xs text-stone-400">Back</p>
      </Link>
      <h1 className="text-xl font-bold mb-6 uppercase text-center">
        Star Wars: Characters
      </h1>
      <ul className="flex flex-wrap gap-3 mb-5 justify-center">
        {characters.map((character) => (
          <li key={character.id}>
            <Link
              href={`/characters/${character.id}`}
              className="p-4 w-[157px] rounded shadow bg flex flex-col gap-3"
            >
              <Image
                src={`https://starwars-visualguide.com/assets/img/characters/${character.id}.jpg`}
                alt={character.name}
                width={50}
                height={50}
                className="rounded-full w-28 h-28 object-cover"
              />
              <p className="text-sm text-center line-clamp-1">
                {character.name}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      {/* <div className="flex justify-between items-center mt-6"> */}
      {/* <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 rounded bg disabled:opacity-50 "
        >
          Previous
        </button> */}
      <ul className="flex justify-center gap-2">
        {Array.from(Array(totalPages).keys()).map((number) => (
          <li key={number}>
            <button
              type="button"
              onClick={() => setPage(number + 1)}
              className="bg text-xs p-1 rounded-full w-7 h-7"
            >
              {Number(number) + 1}
            </button>
          </li>
        ))}
      </ul>
      {/* <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="px-4 py-2 rounded bg disabled:opacity-50 "
        >
          Next
        </button> */}
      {/* </div> */}
    </section>
  );
};

export default CharacterList;

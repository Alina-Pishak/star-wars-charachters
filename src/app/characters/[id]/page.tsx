import {
  getCharacterById,
  getCharacters,
  getFilmById,
  getStarshipById,
} from "@/actions";

import Character from "@/components/Character";

import { ICharacter } from "@/components/Character/Character.types";
import { IFilm, IStarship } from "@/types";
import { ReactFlowProvider } from "@xyflow/react";

export const generateStaticParams = async () => {
  const characters = await getCharacters<ICharacter[]>();
  return characters.map((character) => ({
    id: character.id.toString(),
  }));
};

const CharacterPage = async ({ params }: { params: { id: string } }) => {
  const character = await getCharacterById<ICharacter>(params.id.toString());

  const promisesFilms = character.films.map((id) => getFilmById<IFilm>(id));
  const relatedFilms = await Promise.all(promisesFilms);

  const relatedStarshipsIds = relatedFilms.reduce<number[]>((acc, film) => {
    const starshipsInFilm = film.starships.filter((starship) =>
      character.starships.includes(starship)
    );
    return Array.from(new Set([...acc, ...starshipsInFilm]));
  }, []);

  const promisesStarships = relatedStarshipsIds.map((id) =>
    getStarshipById<IStarship>(id)
  );
  const relatedStarships = await Promise.all(promisesStarships);

  return (
    <ReactFlowProvider>
      <Character
        character={character}
        films={relatedFilms}
        starships={relatedStarships}
      />
    </ReactFlowProvider>
  );
};

export default CharacterPage;

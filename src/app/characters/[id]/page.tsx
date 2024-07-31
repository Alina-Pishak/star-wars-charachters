import { getCharacterById, getFilms, getStarships } from "@/actions";

import Character from "@/components/Character";
import { ICharacter } from "@/components/Character/Character.types";
import { IApiFilmsResponse } from "@/types/Film.types";
import { IApiStarshipsResponse } from "@/types/Starships.types";

const CharacterPage = async ({ params }: { params: { id: string } }) => {
  const character = await getCharacterById<ICharacter>(params.id.toString());
  const films = await getFilms<IApiFilmsResponse>();
  const starships = await getStarships<IApiStarshipsResponse>();

  const relatedFilms = films.results.filter((film) =>
    character.films.includes(film.id)
  );
  const relatedStarships = starships.results.filter((starship) => {
    console.log(starship.id);
    return character.starships.includes(starship.id);
  });

  return (
    <Character
      character={character}
      films={relatedFilms}
      starships={relatedStarships}
    />
  );
};

export default CharacterPage;

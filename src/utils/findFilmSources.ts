import { IFilm } from "@/types/Film.types";

export const findFilmSources = (films: IFilm[], starship: number) => {
  const film = films
    .find(({ starships }) => starships.includes(starship))
    ?.id.toString();
  return `film-${film}`;
};

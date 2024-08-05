import { IFilm, IStarship } from "@/types";
import { findFilmSources } from "./findFilmSources";

export const makeEdges = (films: IFilm[], starships: IStarship[]) => {
  const filmEdges = films.map((film, index) => ({
    id: `hero-film-${index}`,
    source: "hero",
    target: `film-${film.id}`,
  }));

  const shipEdges = starships.map((starship, index) => ({
    id: `film-ship-${index}`,
    source: findFilmSources(films, starship.id),
    target: `ship-${starship.id}`,
  }));
  return [...filmEdges, ...shipEdges];
};

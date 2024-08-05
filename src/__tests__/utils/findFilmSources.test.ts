import { findFilmSources } from "@/utils";

import { IFilm } from "@/types";

describe("findFilmSources", () => {
  const mockFilms: IFilm[] = [
    {
      id: 1,
      title: "Film 1",
      episode_id: 1,
      opening_crawl: "",
      director: "",
      producer: "",
      release_date: new Date(),
      species: [],
      starships: [1],
      vehicles: [],
      characters: [],
      planets: [],
      url: "",
      created: "",
      edited: "",
    },
    {
      id: 2,
      title: "Film 2",
      episode_id: 2,
      opening_crawl: "",
      director: "",
      producer: "",
      release_date: new Date(),
      species: [],
      starships: [2],
      vehicles: [],
      characters: [],
      planets: [],
      url: "",
      created: "",
      edited: "",
    },
  ];

  it("should return correct film source string", () => {
    const result = findFilmSources(mockFilms, 1);
    expect(result).toBe("film-1");
  });

  it("should return undefined for non-existing starship", () => {
    const result = findFilmSources(mockFilms, 999);
    expect(result).toBe("film-undefined");
  });
});

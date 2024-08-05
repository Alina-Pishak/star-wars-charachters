import { makeEdges } from "@/utils/makeEdges";

import { IFilm, IStarship } from "@/types/";

jest.mock("@/utils/findFilmSources", () => ({
  findFilmSources: jest.fn(() => "film-1"),
}));

describe("makeEdges", () => {
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
      starships: [],
      vehicles: [],
      characters: [],
      planets: [],
      url: "",
      created: "",
      edited: "",
    },
  ];

  const mockStarships: IStarship[] = [
    {
      id: 1,
      name: "Starship 1",
      model: "",
      starship_class: "",
      manufacturer: "",
      cost_in_credits: "",
      length: "",
      crew: "",
      passengers: "",
      max_atmosphering_speed: "",
      hyperdrive_rating: "",
      MGLT: "",
      cargo_capacity: "",
      consumables: "",
      films: [],
      pilots: [],
      url: "",
      created: "",
      edited: "",
    },
  ];

  it("should create correct edges", () => {
    const result = makeEdges(mockFilms, mockStarships);
    expect(result).toEqual([
      { id: "hero-film-0", source: "hero", target: "film-1" },
      { id: "film-ship-0", source: "film-1", target: "ship-1" },
    ]);
  });
});

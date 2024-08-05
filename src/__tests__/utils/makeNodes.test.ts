import { ICharacter } from "@/components/Character/Character.types";

import { makeNodes } from "@/utils/makeNodes";

import { IFilm } from "@/types/Film.types";
import { IStarship } from "@/types/Starships.types";

describe("makeNodes", () => {
  const mockCharacter: ICharacter = {
    id: 1,
    birth_year: "2000",
    created: "2020-01-01T00:00:00Z",
    edited: "2020-01-02T00:00:00Z",
    eye_color: "blue",
    films: [1],
    gender: "male",
    hair_color: "brown",
    height: "180",
    homeworld: 1,
    mass: "75",
    name: "Character 1",
    skin_color: "light",
    species: [1],
    starships: [1],
    url: "http://example.com",
    vehicles: [1],
  };

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

  it("should create correct nodes with mobile view", () => {
    const result = makeNodes(
      mockCharacter,
      mockFilms,
      mockStarships,
      true,
      false
    );
    expect(result).toEqual([
      {
        id: "hero",
        data: {
          name: "Character 1",
          height: "180",
          hair_color: "brown",
          eye_color: "blue",
          birth_year: "2000",
          gender: "male",
          imageUrl:
            "https://starwars-visualguide.com/assets/img/characters/1.jpg",
        },
        position: { x: 0, y: 0 },
        type: "customNode",
      },
      {
        id: "film-1",
        data: {
          name: "Film 1",
          imageUrl: "https://starwars-visualguide.com/assets/img/films/1.jpg",
        },
        position: { x: 0, y: 340 },
        type: "customNodes",
      },
      {
        id: "ship-1",
        data: {
          name: "Starship 1",
          imageUrl:
            "https://starwars-visualguide.com/assets/img/starships/1.jpg",
        },
        position: { x: 200, y: 340 },
        type: "customNodes",
      },
    ]);
  });
});

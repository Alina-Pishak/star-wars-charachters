import { render, screen } from "@testing-library/react";

import Character from "@/components/Character";
const mockCharacter = {
  id: 1,
  name: "Luke Skywalker",
  birth_year: "19BBY",
  created: "1977-05-25T12:00:00Z",
  edited: "2000-01-01T00:00:00Z",
  eye_color: "blue",
  films: [1],
  gender: "male",
  hair_color: "blonde",
  height: "180",
  homeworld: 1,
  mass: "75",
  skin_color: "fair",
  species: [1],
  starships: [1],
  url: "https://swapi.dev/api/people/1/",
  vehicles: [1],
};

const mockFilms = [
  {
    id: 1,
    title: "A New Hope",
    episode_id: 4,
    opening_crawl: "It is a period of civil war...",
    director: "George Lucas",
    producer: "Gary Kurtz, Rick McCallum",
    release_date: new Date("1977-05-25"),
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

const mockStarships = [
  {
    id: 2,
    name: "X-wing",
    model: "T-65 X-wing",
    starship_class: "Starfighter",
    manufacturer: "Incom Corporation",
    cost_in_credits: "149999",
    length: "12.5",
    crew: "1",
    passengers: "0",
    max_atmosphering_speed: "1050",
    hyperdrive_rating: "1.0",
    MGLT: "100",
    cargo_capacity: "110",
    consumables: "1 week",
    films: [],
    pilots: [],
    url: "",
    created: "",
    edited: "",
  },
];

describe("Character Component", () => {
  it("renders character details correctly", () => {
    render(
      <Character
        character={mockCharacter}
        films={mockFilms}
        starships={mockStarships}
      />
    );

    expect(screen.getByText("Back")).toBeInTheDocument();
    expect(screen.getByText("Star Wars: Characters")).toBeInTheDocument();
    expect(screen.getByText(mockCharacter.name)).toBeInTheDocument();
  });
});

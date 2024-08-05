import { render, screen, waitFor, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import CharacterList from "@/components/CharacterList";

import { getCharacters } from "@/actions";

import { ICharacter } from "@/components/Character/Character.types";
import { IApiCharactersResponse } from "@/types";

jest.mock("@/actions", () => ({
  getCharacters: jest.fn(),
}));

const mockCharacters: ICharacter[] = [
  {
    id: 1,
    name: "Luke Skywalker",
    birth_year: "19BBY",
    created: "",
    edited: "",
    eye_color: "blue",
    films: [],
    gender: "male",
    hair_color: "blonde",
    height: "172",
    homeworld: 1,
    mass: "77",
    skin_color: "fair",
    species: [],
    starships: [],
    url: "",
    vehicles: [],
  },
  {
    id: 2,
    name: "Darth Vader",
    birth_year: "41.9BBY",
    created: "",
    edited: "",
    eye_color: "yellow",
    films: [],
    gender: "male",
    hair_color: "none",
    height: "202",
    homeworld: 1,
    mass: "136",
    skin_color: "white",
    species: [],
    starships: [],
    url: "",
    vehicles: [],
  },
];

const mockApiResponse: IApiCharactersResponse = {
  count: 2,
  next: null,
  previous: null,
  results: mockCharacters,
};

describe("CharacterList", () => {
  beforeEach(() => {
    (getCharacters as jest.Mock).mockResolvedValue(mockApiResponse);
  });

  it("renders correctly and displays characters", async () => {
    render(<CharacterList />);

    expect(screen.getByText(/Star Wars: Characters/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
      expect(screen.getByText(/Darth Vader/i)).toBeInTheDocument();
    });

    expect(screen.getAllByRole("button")).toHaveLength(1);

    fireEvent.click(screen.getByText("1"));
    await waitFor(() => {
      expect(screen.getByText(/Luke Skywalker/i)).toBeInTheDocument();
    });
  });
});

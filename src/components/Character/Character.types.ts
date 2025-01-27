import { IFilm, IStarship } from "@/types";

export interface ICharacterProps {
  character: ICharacter;
  films: IFilm[];
  starships: IStarship[];
}

export interface ICharacter {
  id: number;
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: number[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: number;
  mass: string;
  name: string;
  skin_color: string;
  species: number[];
  starships: number[];
  url: string;
  vehicles: number[];
}

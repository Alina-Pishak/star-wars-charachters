import { ICharacter } from "../Character/Character.types";

export interface IApiCharactersResponse {
  count: number;
  next: null | string;
  previous: null | string;
  results: ICharacter[];
}

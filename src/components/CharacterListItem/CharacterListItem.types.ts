import { ICharacter } from "../Character/Character.types";

export interface CharacterListItemProps {
  character: ICharacter;
  hasImageError: boolean;
  setHasImageError: (value: boolean) => void;
}

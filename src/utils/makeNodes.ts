import { ICharacter } from "@/components/Character/Character.types";
import { IFilm } from "@/types/Film.types";
import { IStarship } from "@/types/Starships.types";

export const makeNodes = (
  character: ICharacter,
  films: IFilm[],
  starships: IStarship[],
  isMobile: boolean,
  isTablet: boolean
) => {
  const { id, name, height, hair_color, eye_color, birth_year, gender } =
    character;
  const heroNode = {
    id: "hero",
    data: {
      name,
      height,
      hair_color,
      eye_color,
      birth_year,
      gender,
      imageUrl: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
    },
    position: { x: 0, y: 0 },
    type: "customNode",
  };
  const filmNodes = films.map((film, index) => ({
    id: `film-${film.id}`,
    data: {
      name: film.title,
      imageUrl: `https://starwars-visualguide.com/assets/img/films/${film.id}.jpg`,
    },
    position: {
      x: isMobile ? 0 : (index + 1) * 150,
      y: isMobile ? (index + 2) * 170 : 550,
    },
    type: "customNodes",
  }));

  const shipNodes = starships.map((ship, index) => ({
    id: `ship-${ship.id}`,
    data: {
      name: ship.name,
      imageUrl: `https://starwars-visualguide.com/assets/img/starships/${ship.id}.jpg`,
    },
    position: {
      x:
        (isTablet && 350) ||
        (isMobile && 200) ||
        (!isTablet && (index + 1) * 150) ||
        0,
      y: isMobile ? (index + 2) * 170 : 850,
    },
    type: "customNodes",
  }));

  return [heroNode, ...filmNodes, ...shipNodes];
};

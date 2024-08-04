export interface IFilm {
  id: number;
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: Date;
  species: number[];
  starships: number[];
  vehicles: number[];
  characters: number[];
  planets: number[];
  url: string;
  created: string;
  edited: string;
}

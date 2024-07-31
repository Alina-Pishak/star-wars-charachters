export interface IStarship {
  id: number;
  name: string;
  model: string;
  starship_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  hyperdrive_rating: string;
  MGLT: string;
  cargo_capacity: string;
  consumables: string;
  films: number[];
  pilots: number[];
  url: string;
  created: string;
  edited: string;
}

export interface IApiStarshipsResponse {
  count: number;
  next: null | string;
  previous: null | string;
  results: IStarship[];
}

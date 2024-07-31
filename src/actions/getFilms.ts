export const getFilms = async <T>(): Promise<T> => {
  const res = await fetch(`https://sw-api.starnavi.io/films`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getFilmById = async <T>(id: number): Promise<T> => {
  const res = await fetch(`https://sw-api.starnavi.io/films/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

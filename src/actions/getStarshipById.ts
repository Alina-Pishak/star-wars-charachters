export const getStarshipById = async <T>(id: number): Promise<T> => {
  const res = await fetch(`https://sw-api.starnavi.io/starships/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

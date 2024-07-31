export const getCharacterById = async <T>(id: string): Promise<T> => {
  const res = await fetch(`https://sw-api.starnavi.io/people/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

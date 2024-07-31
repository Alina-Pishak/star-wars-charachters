export const getCharacters = async (page: number) => {
  const res = await fetch(`https://sw-api.starnavi.io/people/?page=${page}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

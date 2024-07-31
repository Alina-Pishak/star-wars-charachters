export const getCharacterById = async (id: string) => {
  const res = await fetch(`https://sw-api.starnavi.io/people/${id}`);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

import { getCharacterById } from "@/actions";

describe("getCharacterById", () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it("should fetch character data successfully", async () => {
    const mockData = {
      id: 1,
      birth_year: "19BBY",
      created: "2014-12-09T13:50:51.644000Z",
      edited: "2014-12-20T21:17:56.891000Z",
      eye_color: "blue",
      films: [1, 2, 3],
      gender: "male",
      hair_color: "blond",
      height: "172",
      homeworld: 1,
      mass: "77",
      name: "Luke Skywalker",
      skin_color: "fair",
      species: [1],
      starships: [2, 3],
      url: "https://sw-api.starnavi.io/people/1",
      vehicles: [4, 5],
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const data = await getCharacterById<typeof mockData>(
      mockData.id.toString()
    );
    expect(data).toEqual(mockData);
    expect(global.fetch).toHaveBeenCalledWith(
      `https://sw-api.starnavi.io/people/${mockData.id}`
    );
  });

  it("should throw an error when fetch fails", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    });

    await expect(getCharacterById("1")).rejects.toThrow("Failed to fetch data");
    expect(global.fetch).toHaveBeenCalledWith(
      "https://sw-api.starnavi.io/people/1"
    );
  });
});

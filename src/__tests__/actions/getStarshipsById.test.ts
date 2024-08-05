import { getStarshipById } from "@/actions";

describe("getStarshipById", () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it("should fetch starship data successfully", async () => {
    const mockData = {
      id: 2,
      name: "Death Star",
      model: "DS-1 Orbital Battle Station",
      manufacturer: "Imperial Department of Military Research",
      cost_in_credits: "1000000000000",
      length: "120000",
      max_atmosphering_speed: "n/a",
      crew: "342953",
      passengers: "843342",
      cargo_capacity: "1000000000000",
      consumables: "3 years",
      hyperdrive_rating: "4.0",
      MGLT: "10",
      starship_class: "Deep Space Mobile Battlestation",
      pilots: [],
      films: [1],
      created: "2014-12-10T16:36:50.509000Z",
      edited: "2014-12-20T21:26:24.783000Z",
      url: "https://sw-api.starnavi.io/starships/2",
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const data = await getStarshipById<typeof mockData>(2);
    expect(data).toEqual(mockData);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://sw-api.starnavi.io/starships/2"
    );
  });

  it("should throw an error when fetch fails", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    });

    await expect(getStarshipById(2)).rejects.toThrow("Failed to fetch data");
    expect(global.fetch).toHaveBeenCalledWith(
      "https://sw-api.starnavi.io/starships/2"
    );
  });
});

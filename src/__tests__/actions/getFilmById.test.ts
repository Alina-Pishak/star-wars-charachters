import { getFilmById } from "@/actions";

describe("getFilmById", () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
  });

  it("should fetch film data successfully", async () => {
    const mockData = {
      id: 1,
      title: "A New Hope",
      episode_id: 4,
      opening_crawl: "It is a period of civil war....",
      director: "George Lucas",
      producer: "Gary Kurtz, Rick McCallum",
      release_date: "1977-05-25",
      characters: [1, 2, 3],
      planets: [1, 2],
      starships: [2, 3],
      vehicles: [4, 5],
      species: [1, 2],
      created: "2014-12-10T14:23:31.880000Z",
      edited: "2014-12-20T19:49:45.256000Z",
      url: "https://sw-api.starnavi.io/films/1",
    };

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    const data = await getFilmById<typeof mockData>(1);
    expect(data).toEqual(mockData);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://sw-api.starnavi.io/films/1"
    );
  });

  it("should throw an error when fetch fails", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
    });

    await expect(getFilmById(1)).rejects.toThrow("Failed to fetch data");
    expect(global.fetch).toHaveBeenCalledWith(
      "https://sw-api.starnavi.io/films/1"
    );
  });
});

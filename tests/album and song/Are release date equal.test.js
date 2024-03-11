const DB_ALBUMS = require("../../database/albums.json");
const ALBUMS = require("../../albums/index");
const { areDatesEqual } = require("../../utils");

test("Release dates should be equal", () => {
  ALBUMS.forEach((actualAlbum) => {
    const expectedAlbum = DB_ALBUMS.find(
      (album) => album.title === actualAlbum.name
    );

    // Check if expectedAlbum is found
    if (!expectedAlbum) {
      console.error(
        `Error: Expected album '${actualAlbum.name}' not found in DB_ALBUMS`
      );
      return;
    }

    const result = areDatesEqual(
      expectedAlbum.releaseDate,
      actualAlbum.releaseDate
    );
    if (!result) {
      console.error(
        `Error: Expected release date of '${actualAlbum.name}' album is ${actualAlbum.releaseDate} but is '${expectedAlbum.releaseDate}'`
      );
    }
    expect(expectedAlbum.releaseDate).toEqual(actualAlbum.releaseDate);
  });
});

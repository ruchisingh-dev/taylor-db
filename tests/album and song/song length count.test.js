const DB_ALBUMS = require("../../database/albums.json");
const ALBUMS = require("../../albums/index");

test("Song length", () => {
  ALBUMS.forEach((actualAlbum) => {
    const expected = DB_ALBUMS.find(
      (album) => album.title === actualAlbum.name
    );

    const len1 = actualAlbum.songs.length;
    const len2 = expected.tracks.length;
    if (len2 !== len1) {
      console.error(`Error: ${actualAlbum.name}`);
    }
    expect(len2).toEqual(len1);
  });
});

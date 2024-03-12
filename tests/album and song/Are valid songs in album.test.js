const DB_ALBUMS = require("../../database/albums.json");
const ALBUMS = require("../../albums/index");
const { getSongNameById, areArraysEqual } = require("../../utils");

test("Are valid songs in albums", () => {
  ALBUMS.forEach((actualAlbum) => {
    const expectedAlbum = DB_ALBUMS.find(
      (album) => album.title === actualAlbum.name
    );

    if (!expectedAlbum) {
      console.error(
        `Error: Expected album not found for '${actualAlbum.name}'`
      );
      return;
    }

    const actualSongNames = actualAlbum.songs.map((song) => song.name);
    const expectedSongNames = [];
    const expectedSongIds = expectedAlbum.tracks.map((song) => song.$oid);
    expectedSongIds.map((songID) => {
      const name = getSongNameById(songID);
      if (!name) {
        console.log(
          `Error: Song doesn't exist with ID '${songID}' in album '${actualAlbum.name}'`
        );
      } else {
        expectedSongNames.push(name);
      }
    });

    const result = areArraysEqual(expectedSongNames, actualSongNames);
    if (!result) {
      console.error(`Error: Songs mismatch in album '${actualAlbum.name}'`);
    }

    const missingElements = actualSongNames.filter(
      (item) => !expectedSongNames.includes(item)
    );

    if (missingElements.length > 0) {
      console.error(
        `Error: The following elements are missing: ${missingElements}`
      );
    }

    expect(expectedSongNames).toEqual(expect.arrayContaining(actualSongNames));
  });
});

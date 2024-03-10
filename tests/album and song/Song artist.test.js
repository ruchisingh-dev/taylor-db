const DB_ALBUMS = require("../../database/albums.json");
const DB_SONGS = require("../../database/songs.json");
const ALBUMS = require("../../albums/index");

test("Are valid artist of songs", () => {
  ALBUMS.forEach((actualAlbum) => {
    actualAlbum.songs.forEach((actualSong) => {
      const song = DB_SONGS.find((song) => song.name === actualSong.name);
      if (!song) {
        console.log(
          `Error: '${actualSong.name}' song are not available in the database`
        );
        return;
      }
      expect(song.artist == actualSong.artist).toBe(true);
    });
  });
});

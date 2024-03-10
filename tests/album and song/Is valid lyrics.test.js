const DB_SONGS = require("../../database/songs.json");

test("Is valid lyrics", () => {
  DB_SONGS.forEach((song) => {
    const isValidLyrics = song.lyrics.length >= 20;
    if (!isValidLyrics) {
      console.error(`Error: '${song.name}' lyrics are not vaild`);
    }
    expect(isValidLyrics).toBe(true);
  });
});

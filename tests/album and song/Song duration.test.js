const DB_ALBUMS = require("../../database/albums.json");
const DB_SONGS = require("../../database/songs.json");
const ALBUMS = require("../../albums/index");
const { getSongNameById, areArraysEqual } = require("../../utils");

function durationStringToDate(durationString) {
  const [minutesStr, secondsStr] = durationString.split(" ");
  const minutes = parseInt(minutesStr);
  const seconds = parseInt(secondsStr);

  const totalMilliseconds = minutes * 60 * 1000 + seconds * 1000;

  // Create a new Date object and add the calculated milliseconds
  const currentDate = new Date();
  const durationDate = new Date(currentDate.getTime() + totalMilliseconds);

  return durationDate;
}
function compareDates(date1, date2) {
  const difference = Math.abs(date1.getTime() - date2.getTime());
  const differenceInSeconds = difference / 1000; // Convert milliseconds to seconds

  // Return true if the difference is less than or equal to 5 seconds
  return differenceInSeconds <= 2;
}

test("Are valid songs in albums", () => {
  ALBUMS.forEach((actualAlbum) => {
    const expectedAlbum = DB_ALBUMS.find(
      (album) => album.title === actualAlbum.name
    );
    expectedAlbum.tracks.forEach((track) => {
      const id = track.$oid;
      const song = DB_SONGS.find((song) => song._id.$oid === id);
      const song2 = actualAlbum.songs.find((song) => song.name);

      if (song.name == song2.name) {
        const actualDuration = durationStringToDate(song.duration);
        const expectedDuration = durationStringToDate(song2.duration);
        const result = compareDates(actualDuration, expectedDuration);
        if (!result) {
          console.log(`Error: Song name:${song.name} - ${song.duration}`);
          console.log(`Actual Duration:${song2.duration}`);
        }
        expect(result).toBe(true);
      }
    });
  });
});

const DB_ALBUMS = require("./database/albums.json");
const DB_SONGS = require("./database/songs.json");

console.log("Albums and Songs\n");
listAlbumSongNames();

console.log("\nAlbums Count");
countSongAndAlbum();

function listAlbumSongNames() {
  DB_ALBUMS.forEach((album, index) => {
    console.log(`${index + 1}. ${album.title} - ${album.releaseDate}`);

    const songIDs = album.tracks.map((song) => song.$oid);
    songIDs.forEach((id, index) => {
      const song = DB_SONGS.find((song) => song._id.$oid === id);
      console.log(`\t${index + 1}. ${song.name}`);
    });
  });
}
function countSongAndAlbum() {
  DB_ALBUMS.forEach((album, index) => {
    console.log(`${index + 1}. ${album.title} - ${album.tracks.length} songs`);
  });

  console.log(`Total ${DB_SONGS.length} songs.`);
}

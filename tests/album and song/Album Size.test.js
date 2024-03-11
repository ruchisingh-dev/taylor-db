const DB_ALBUMS = require("../../database/albums.json");
const ALBUMS = require("../../albums/index");

test("Album Length Should be same", () => {
  expect(DB_ALBUMS.length === ALBUMS.length).toBe(true);
});

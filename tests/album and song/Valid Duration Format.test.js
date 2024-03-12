const DB_SONGS = require("../../database/songs.json");

test("Vaild Duration", () => {
  DB_SONGS.forEach((songs) => {
    const duration = songs.duration;

    expect(duration).toContainDuration();
  });
});
expect.extend({
  toContainDuration(received) {
    const durationRegex = /\b\d+m \d{2}s\b/;
    const pass = durationRegex.test(received);
    return {
      pass,
      message: () =>
        `Expected "${received}" to contain a duration in the format 10m 56s`,
    };
  },
});

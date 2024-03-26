const DB_SONGS = require("../database/songs.json");
function isOnlyOneOptionTrue(options) {
  const trueOptions = options.filter((option) => option.isRight);
  return trueOptions.length === 1;
}

const hasFourOptions = (options) => {
  return options.length === 4;
};

const hasUniqueAnd16CharacterIds = (questions) => {
  const questionIds = new Set();

  questions.forEach((question) => {
    // if(questionIds.has(question.id)){
      // console.error(`Error: has unique id but id ${question.id}`)
    // }
    // Ensure the ID is unique
    expect(questionIds.has(question.id)).toBe(false);
    // if(!question.id.length === 16){
    //   console.error(`Error: has only 16 charecter but id ${question.id}`)
    // }  
      // Ensure the ID is 16 characters long
    expect(question.id).toHaveLength(16);

    questionIds.add(question.id);
  });
};
const getSongNameById = (songId) => {
  const foundSong = DB_SONGS.find((song) => song._id?.$oid === songId);

  if (foundSong) {
    return foundSong.name;
  } else {
    return false;
  }
};

function isValidDate(dateArray) {
  // Check if the input is an array with three elements
  if (!Array.isArray(dateArray) || dateArray.length !== 3) {
    return false;
  }

  const [monthStr, day, year] = dateArray;

  // Check is valid numbers
  if (isNaN(day) || isNaN(year)) {
    return false;
  }

  const dateObject = new Date(`${monthStr} ${day}, ${year}`);

  // Check if the month part of the resulting date matches the input month
  const isValidMonth =
    dateObject.toLocaleString("en-US", { month: "short" }) === monthStr;

  // Check if the dateObject is a valid date and the month matches
  return !isNaN(dateObject) && isValidMonth;
}

function areDatesEqual(expectedDate, actualDate) {
  if (!isValidDate(expectedDate) || !isValidDate(actualDate)) {
    return false;
  }
  const [month1, day1, year1] = expectedDate;
  const [month2, day2, year2] = actualDate;

  const dateObject1 = new Date(`${month1} ${day1}, ${year1}`);
  const dateObject2 = new Date(`${month2} ${day2}, ${year2}`);

  const result = dateObject1.getTime() === dateObject2.getTime();
  if (result) {
    return true;
  }
  return false;
}

const areArraysEqual = (array1, array2) => {
  const set1 = new Set(array1);
  const set2 = new Set(array2);

  const areArraysEqual =
    array1.length === array2.length &&
    [...set1].every((value) => set2.has(value));
  return areArraysEqual;
};
module.exports = {
  areArraysEqual,
  areDatesEqual,
  isOnlyOneOptionTrue,
  hasFourOptions,
  getSongNameById,
  hasUniqueAnd16CharacterIds,
};

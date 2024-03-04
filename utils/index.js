function isOnlyOneOptionTrue(options) {
  const trueOptions = options.filter((option) => option.isRight);
  return trueOptions.length === 1;
}

module.exports = { isOnlyOneOptionTrue };

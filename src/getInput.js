const isValidZipCode = (zipCode) => /^\d{5}$/.test(zipCode);

const isValidRangeDistance = (rangeDistance) => /^\d+$/.test(rangeDistance);

const getInput = () => {
  const [, , zipCode, rangeDistance = '20'] = process.argv;

  // if (!process.env.TOKEN) {
  //   console.error('Missing "TOKEN" environment variable');
  //   process.exit(1);
  // }

  if (!isValidZipCode(zipCode)) {
    console.error('Please provide a valid zip code');
    process.exit(1);
  }

  if (!isValidRangeDistance(rangeDistance)) {
    console.error('Please provide a valid range distance');
    process.exit(1);
  }

  return { zipCode, rangeDistance };
};

module.exports = getInput;

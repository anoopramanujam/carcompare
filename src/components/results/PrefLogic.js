import * as COL from '../../globals/ColConstants';

const filterPrefs = (data, prefFilters) => {
  const {
    sortBy, makes,
  } = prefFilters;
  let results = [...data];

  results = data.filter((car) => makes.includes(car[COL.make]));
  function sortCar(arr, key) {
    return key === COL.price
      ? arr.sort((a, b) => a[key] - b[key])
      : arr.sort((a, b) => (b[key] - a[key] || a[COL.price] - b[COL.price]));
  }

  results = sortCar(results, sortBy);
  return results;
};

export default filterPrefs;

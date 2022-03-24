import { COL } from '../../globals/Constants';

const filterPrefs = (data, prefFilters) => {
  const {
    sortBy, makes,
  } = prefFilters;

  function sortCar(arr, key) {
    return key === COL.price
      ? arr.sort((a, b) => a[key] - b[key])
      : arr.sort((a, b) => (b[key] - a[key] || a[COL.price] - b[COL.price]));
  }

  const results = sortCar(data, sortBy);
  return results;
};

export default filterPrefs;

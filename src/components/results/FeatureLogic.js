import {
  REQUIRED, PREFERRED, IGNORE, YES, COL,
} from '../../globals/Constants';

const filterFeatures = (data, featureFilters) => {
  // console.log(featureFilters);
  const { alloy } = featureFilters;
  const results = [];
  for (let i = 0; i < data.length; i += 1) {
    const car = data[i];
    car[COL.points] = 0;
    if (alloy === REQUIRED) {
      if (car[COL.alloy] === YES) {
        car[COL.points] += 1;
        results.push(car);
      }
    } else {
      if (alloy === PREFERRED && car[COL.alloy] === YES) {
        car[COL.points] += 1;
      }
      results.push(car);
    }
  }
  return results;
};

export default filterFeatures;

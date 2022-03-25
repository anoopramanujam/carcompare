import {
  REQUIRED, PREFERRED, IGNORE, YES, NO, COL,
} from '../../globals/Constants';

function checkCar(car, featureFilters) {
  const features = ['alloy', 'seatAdjust', 'androidCar', 'powerWindows'];
  const result = { ...car, [COL.points]: 0 };
  // console.log(car, featureFilters);
  for (let i = 0; i < features.length; i += 1) {
    const feature = features[i];
    // console.log('Processing', feature);
    if (featureFilters[feature] === REQUIRED) {
      // console.log(feature, 'is required', car[COL[feature]]);
      if ((car[COL[feature]] !== NO) && (car[COL[feature]] !== '')) {
        // console.log('ok');
        result[COL.points] += 1;
        // return result;
      } else {
        return false;
      }
    } else
    if (featureFilters[feature] === PREFERRED
      && ((car[COL[feature]] !== NO) && (car[COL[feature]] !== ''))) {
      result[COL.points] += 1;
    }
    // return result;
  }
  // console.log('returning false');
  return result;
}

const filterFeatures = (data, featureFilters) => {
  // console.log(featureFilters);
  const results = [];
  for (let i = 0; i < data.length; i += 1) {
    const car = checkCar(data[i], featureFilters);
    if (car !== false) {
      results.push(car);
    }
  }
  return results;
};

export default filterFeatures;

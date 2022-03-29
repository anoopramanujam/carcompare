import { Circle } from '@mui/icons-material';
import {
  REQUIRED, PREFERRED, IGNORE, YES, NO,
} from '../../globals/Constants';

import * as COL from '../../globals/ColConstants';

function checkCar(car, featureFilters) {
  const features = [
    COL.alloyWheels, COL.driverSeatAdjust, COL.androidPlay, COL.powerWindows];
  const result = { ...car, [COL.points]: 0 };
  console.log(featureFilters);
  for (let i = 0; i < features.length; i += 1) {
    const feature = features[i];

    // Ensure required features are present
    if (featureFilters[feature] === REQUIRED) {
      if ((car[feature] !== NO) && (car[feature] !== '')) {
        result[COL.points] += 1;
      } else {
        return false;
      }
    } else // Add points if preferred features are present
    if (featureFilters[feature] === PREFERRED
      && ((car[feature] !== NO) && (car[feature] !== ''))) {
      result[COL.points] += 1;
    }
  }
  // The Value-for-Money calculation
  result[COL.vfm] = result[COL.points] / result[COL.price];
  return result;
}

const filterFeatures = (data, featureFilters) => {
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

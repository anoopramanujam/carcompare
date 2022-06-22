import { Circle } from '@mui/icons-material';
import {
  REQUIRED, PREFERRED, IGNORE, YES, NO,
} from '../../globals/Constants';

import * as COL from '../../globals/ColConstants';

function checkCar(car, featureFilters) {
  const features = [
    COL.alloyWheels, COL.daytimeRunningLamps, COL.projectorHeadLamps,
    COL.automaticHeadlightControl, COL.fogLamps, COL.rainSensingWipers,
    COL.driverSeatAdjust, COL.powerWindows,
    COL.electFoldableMirrors, COL.electAdjustableMirrors, COL.autoDimmingIrvm,
    COL.tiltSteeringAdjust, COL.frontArmrest, COL.sunRoof, COL.rearArmrest,
    COL.rearAcVents, COL.rearDefogger, COL.rearSeatSplit, COL.trunkLight,
    COL.androidPlay, COL.steeringMountedControl, COL.headsUpDisplay,
    COL.powerWindowsOneTouch, COL.powerWindowsRemote, COL.rearSunshade,
    COL.followMeHomeLights, COL.wirelessCharging, COL.cooledGloveBox,
    COL.climateControl, COL.remoteKeylessEntry, COL.pushStart,
    COL.cruiseControl, COL.ventilatedFrontSeats,
    COL.rearSensors, COL.rearViewCamera, COL.frontSensors,
    COL.sideCurtainAirbags, COL.frontSideAirbags, COL.dualHorn,
    COL.camera360, COL.laneCamera, COL.tpms,
    COL.isoFixCompatibility,
  ];
  const result = { ...car, [COL.points]: 0 };
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

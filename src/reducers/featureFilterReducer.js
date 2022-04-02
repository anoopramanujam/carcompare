import { UPDATE_FEATURES } from '../globals/ActionTypes';
import { PREFERRED } from '../globals/Constants';
import * as COL from '../globals/ColConstants';

const InitialState = {
  [COL.alloyWheels]: PREFERRED,
  [COL.daytimeRunningLamps]: PREFERRED,
  [COL.automaticHeadlightControl]: PREFERRED,
  [COL.projectorHeadLamps]: PREFERRED,
  [COL.fogLamps]: PREFERRED,
  [COL.rainSensingWipers]: PREFERRED,

  [COL.driverSeatAdjust]: PREFERRED,
  [COL.powerWindows]: PREFERRED,
  [COL.electFoldableMirrors]: PREFERRED,
  [COL.electAdjustableMirrors]: PREFERRED,
  [COL.autoDimmingIrvm]: PREFERRED,
  [COL.tiltSteeringAdjust]: PREFERRED,
  [COL.frontArmrest]: PREFERRED,
  [COL.rearArmrest]: PREFERRED,
  [COL.sunRoof]: PREFERRED,
  [COL.rearAcVents]: PREFERRED,
  [COL.rearDefogger]: PREFERRED,
  [COL.rearSeatSplit]: PREFERRED,
  [COL.trunkLight]: PREFERRED,

  [COL.androidPlay]: PREFERRED,
  [COL.steeringMountedControl]: PREFERRED,
  [COL.headsUpDisplay]: PREFERRED,
  [COL.powerWindowsOneTouch]: PREFERRED,
  [COL.powerWindowsRemote]: PREFERRED,
  [COL.rearSunshade]: PREFERRED,
  [COL.followMeHomeLights]: PREFERRED,
  [COL.wirelessCharging]: PREFERRED,
  [COL.cooledGloveBox]: PREFERRED,
  [COL.climateControl]: PREFERRED,
  [COL.remoteKeylessEntry]: PREFERRED,
  [COL.pushStart]: PREFERRED,
  [COL.cruiseControl]: PREFERRED,
  [COL.ventilatedFrontSeats]: PREFERRED,
};

export default (state = InitialState, action) => {
  // console.log(state);
  switch (action.type) {
    case UPDATE_FEATURES:
      return action.payload;
    default:
      return state;
  }
};

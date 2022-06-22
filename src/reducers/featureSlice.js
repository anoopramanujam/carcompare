import { createSlice } from '@reduxjs/toolkit';
import { PREFERRED } from '../globals/Constants';
import * as COL from '../globals/ColConstants';

const initialState = {
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

  [COL.frontSideAirbags]: PREFERRED,
  [COL.sideCurtainAirbags]: PREFERRED,
  [COL.rearSensors]: PREFERRED,
  [COL.rearViewCamera]: PREFERRED,
  [COL.frontSensors]: PREFERRED,
  [COL.dualHorn]: PREFERRED,
  [COL.camera360]: PREFERRED,
  [COL.laneCamera]: PREFERRED,
  [COL.tpms]: PREFERRED,
  [COL.isoFixCompatibility]: PREFERRED,
};

const featureSlice = createSlice({
  name: 'featureFilters',
  initialState,
  reducers: {
    setFeatureFilters(state, action) {
      return action.payload;
    },
  },
});

export const { setFeatureFilters } = featureSlice.actions;
export default featureSlice.reducer;

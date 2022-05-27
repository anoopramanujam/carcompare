/* eslint-disable testing-library/prefer-presence-queries */
/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable no-promise-executor-return */
/* eslint-disable jest/no-hooks */
/* eslint-disable jest/prefer-expect-assertions */

/*
Testing suspended since moving to new redux
*/

import React from 'react';
import { Provider } from 'react-redux';

import {
  render, fireEvent, cleanup, waitForElement, within, screen,
} from '@testing-library/react';
import axios from 'axios';
import '@testing-library/jest-dom';

import {
  combineReducers, createStore, applyMiddleware, compose,
} from 'redux';
import store from './store';
// import reduxThunk from 'redux-thunk';
import Home from './Home';

import { PREFERRED } from '../../globals/Constants';
import * as COL from '../../globals/ColConstants';

jest.mock('axios');

const globalData = {
  data: {
    cars: [{
      Id: 'Maruti-Celerio-LXi MT-P-M5', Make: 'Maruti', Model: 'Celerio', Variant: 'LXi MT', Transmission: 'M5', Fuel: 'P', 'Engine Capacity': '998', 'Gross Weight': '1260', Power: '66', Torque: '89@3500', Mileage: '25.24', Price: '5.15', 'Body Type': 'H', Length: '3695', Width: '1655', Height: '1555', Wheelbase: '2435', 'Ground Clearance': 'NA', 'Turning Radius': 'NA', 'Boot Space': '313', Tyres: '165-70 R14', 'Fuel Tank': '32', 'Daytime Running Lamps': '-', 'Projector Head Lamps': '-', 'Automatic Headlight Control': '-', 'Fog Lamps': '-', 'Rain Sensing Wipers': '-', 'Rear Wiper*': '-', 'Alloy Wheels': '-', 'Power Windows': '-', 'Elect. Foldable External Mirrors': '-', 'Elect. Adjustable External Mirrors': '-', 'Auto Dimming IRVM': '-', 'Driver Seat Adjust': '-', 'Telescopic Steering Adjust*': '-', 'Tilt Steering Adjust': '-', 'Cabin Filter*': 'P', 'Ambient Light*': '-', 'Front Map Lamps*': '-', 'Rear Reading Lamps*': '-', 'Front Armrest': '-', 'Rear Armrest': '-', 'Sun Roof': '-', 'Rear AC Vents': '-', 'Rear Defogger': '-', 'Rear Seat Split': '-', 'Trunk Light': '-', Speakers: '-', 'Android Auto Apple CarPlay': '-', 'Head Up Display': '-', 'Power Windows One Touch': '-', 'Power Windows Remote': '-', 'Rear Sunshade': '-', 'FollowMe Home Lights': '-', 'Wireless Charging': '-', 'Cooled Glove Box': '-', 'Climate Control': '-', 'Push Start': '-', 'Remote Keyless Entry': '-', 'Cruise Control': '-', 'Ventilated Front Seats': '-', 'Steering Mounted Control': '-', 'Side Curtain Airbags': '-', 'Front Side Airbags': '-', 'Lane Camera': '-', '360 Camera': '-', 'Dual Horn': '-', 'Front Parking Sensors': '-', 'Rear View Camera': '-', 'Rear Sensors': 'Y', TPMS: '-', 'IsoFix Compatibility': '-',
    },
    {
      Id: 'Maruti-Celerio-Vxi MT-P-M5', Make: 'Maruti', Model: 'Celerio', Variant: 'Vxi MT', Transmission: 'M5', Fuel: 'P', 'Engine Capacity': '998', 'Gross Weight': '1260', Power: '66', Torque: '89@3500', Mileage: '25.24', Price: '5.63', 'Body Type': 'H', Length: '3695', Width: '1655', Height: '1555', Wheelbase: '2435', 'Ground Clearance': 'NA', 'Turning Radius': 'NA', 'Boot Space': '313', Tyres: '165-70 R14', 'Fuel Tank': '32', 'Daytime Running Lamps': '-', 'Projector Head Lamps': '-', 'Automatic Headlight Control': '-', 'Fog Lamps': '-', 'Rain Sensing Wipers': '-', 'Rear Wiper*': '-', 'Alloy Wheels': '-', 'Power Windows': 'FR', 'Elect. Foldable External Mirrors': '-', 'Elect. Adjustable External Mirrors': 'Y', 'Auto Dimming IRVM': '-', 'Driver Seat Adjust': '-', 'Telescopic Steering Adjust*': '-', 'Tilt Steering Adjust': '-', 'Cabin Filter*': 'P', 'Ambient Light*': '-', 'Front Map Lamps*': '-', 'Rear Reading Lamps*': '-', 'Front Armrest': '-', 'Rear Armrest': '-', 'Sun Roof': '-', 'Rear AC Vents': '-', 'Rear Defogger': '-', 'Rear Seat Split': 'Y', 'Trunk Light': '-', Speakers: '-', 'Android Auto Apple CarPlay': '-', 'Head Up Display': '-', 'Power Windows One Touch': 'D', 'Power Windows Remote': '-', 'Rear Sunshade': '-', 'FollowMe Home Lights': '-', 'Wireless Charging': '-', 'Cooled Glove Box': '-', 'Climate Control': '-', 'Push Start': '-', 'Remote Keyless Entry': '-', 'Cruise Control': '-', 'Ventilated Front Seats': '-', 'Steering Mounted Control': '-', 'Side Curtain Airbags': '-', 'Front Side Airbags': '-', 'Lane Camera': '-', '360 Camera': '-', 'Dual Horn': '-', 'Front Parking Sensors': '-', 'Rear View Camera': '-', 'Rear Sensors': 'Y', TPMS: '-', 'IsoFix Compatibility': '-',
    }],
    searchTerm: '',
    wizardMode: true,
  },
};

const prefFilters = {
  sortBy: COL.vfm,
  makes: [],
};

const specFilters = {
  price: 25,
  hatch: true,
  sedan: true,
  suv: true,
  petrol: true,
  diesel: true,
  manual: true,
  auto: true,
};

const featureFilters = {
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

// const store = createStore(
//   combineReducers({
//     globalData, specFilters, featureFilters, prefFilters,
//   }),
// );

const renderComponent = () => render(
  <Provider store={store()}>
    <Home />
  </Provider>,
);

describe('cars', () => {
  afterEach(cleanup);

  it('load cars', async () => {
    axios.get.mockReturnValue(new Promise((resolve) => resolve(globalData)));
    renderComponent();
    const homeText = await screen.findByText(/Select your options below:/);
    expect(homeText).toBeInTheDocument();
    const nextLink = screen.queryByRole('button', { name: 'next' });
    expect(nextLink).toBeInTheDocument();
    fireEvent.click(nextLink);
    const carCountText = await screen.findByText(/Make/);
    expect(carCountText).toBeInTheDocument();
  });
});

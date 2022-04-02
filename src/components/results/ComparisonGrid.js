import React from 'react';

// import { DataGrid } from '@mui/x-data-grid';
import {
  Container, Box, Typography, Paper, Button,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '../mui';
import * as COL from '../../globals/ColConstants';
import './Grid.css';
import { HATCH, SEDAN } from '../../globals/Constants';

function ComparisonGrid({ cars, onClose }) {
  console.log('Cars', cars);
  if (!cars) {
    return null;
  }

  const cols = [{ id: 'id', label: '', minWidth: 100 }];
  const carIds = ['id'];
  for (let i = 0; i < cars.length; i += 1) {
    const car = cars[i];
    const fuel = () => {
      if (car[COL.fuel] === 'P') { return 'Petrol'; }
      if (car[COL.fuel] === 'D') { return 'Diesel'; }
      return '';
    };

    const transmission = () => {
      if (car[COL.transmission][0] === 'M') { return 'Manual'; }
      return 'Automatic';
    };
    cols.push({
      id: car.Id,
      minWidth: 150,
      label: `${car[COL.make]} ${car[COL.model]} ${car[COL.variant]} 
         (${fuel()} ${transmission()})`,
    });
    carIds.push(car.Id);
  }

  const rows = [];

  const featuresToProcess = [COL.price, COL.bodyType,
    COL.engineCapacity, COL.power, COL.torque,
    COL.length, COL.width, COL.height, COL.wheelbase,
    COL.groundClearance, COL.turningRadius, COL.bootSpace,
    COL.tyres, COL.fuelTank,
    COL.daytimeRunningLamps, COL.projectorHeadLamps, COL.automaticHeadlightControl,
    COL.fogLamps, COL.rainSensingWipers, COL.alloyWheels,

    COL.powerWindows, COL.driverSeatAdjust, COL.electFoldableMirrors,
    COL.electAdjustableMirrors, COL.autoDimmingIrvm, COL.tiltSteeringAdjust,
    COL.frontArmrest, COL.rearArmrest, COL.sunRoof,
    COL.rearAcVents, COL.rearDefogger, COL.rearSeatSplit,
    COL.trunkLight,

    COL.speakers, COL.androidPlay, COL.headsUpDisplay,
    COL.powerWindowsOneTouch, COL.rearSunshade, COL.followMeHomeLights,
    COL.wirelessCharging, COL.cooledGloveBox, COL.climateControl,
    COL.pushStart, COL.remoteKeylessEntry, COL.cruiseControl,
    COL.ventilatedFrontSeats, COL.steeringMountedControl,
  ];
  for (let m = 0; m < featuresToProcess.length; m += 1) {
    const feature = featuresToProcess[m];
    let featureUnit = '';
    switch (feature) {
      case COL.price: featureUnit = 'lakhs'; break;
      case COL.engineCapacity: featureUnit = 'CC'; break;
      case COL.power: featureUnit = 'PS'; break;
      case COL.torque: featureUnit = 'NM@rpm'; break;
      case COL.length:
      case COL.width:
      case COL.height:
      case COL.wheelbase: featureUnit = 'mm'; break;
      case COL.groundClearance: featureUnit = 'mm'; break;
      case COL.turningRadius: featureUnit = 'm'; break;
      case COL.bootSpace: featureUnit = 'L'; break;
      case COL.fuelTank: featureUnit = 'L'; break;

      default: break;
    }
    const featureSet = { id: `${feature} ${featureUnit ? `(${featureUnit})` : ''}` };
    for (let n = 0; n < cars.length; n += 1) {
      const thisCar = cars[n];
      let displayValue = thisCar[feature];
      switch (feature) {
        case COL.bodyType: if (displayValue === HATCH) { displayValue = 'Hatch'; } else if (displayValue === SEDAN) { displayValue = 'Sedan'; }
          break;
        case COL.powerWindows: if (displayValue === 'F') { displayValue = 'Front only'; } else if (displayValue === 'FR') { displayValue = 'Both'; }
          break;
        default: break;
      }
      featureSet[thisCar.Id] = displayValue;
    }
    rows.push(featureSet);
  }

  return (
    <>
      <Box sx={{
        p: 1,
        position: 'fixed',
        zIndex: 999,
        background: 'white',
      }}
      >
        <Button
          variant="contained"
          onClick={() => onClose()}
          sx={{ }}
        >
          Close

        </Button>
      </Box>
      <TableContainer component={Paper} sx={{ width: '100%', height: '100%' }}>
        <Table stickyHeader aria-label="sticky table" size="small">
          <TableHead>
            <TableRow>
              {cols.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  className={`${column.id === 'id' ? 'cc-stickyCol' : 'cc-nonSticky'}`}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {cols.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        className={`${column.id === 'id' ? 'cc-stickyCol' : 'cc-nonSticky'}`}
                        sx={{
                          position: `${column.id === 'id' ? 'sticky' : ''}`,
                          background: `${column.id === 'id' ? 'white' : ''}`,
                          zIndex: `${column.id === 'id' ? 10 : 1}`,
                        }}
                      >
                        {column.format && typeof value === 'number'
                          ? column.format(value)
                          : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ComparisonGrid;

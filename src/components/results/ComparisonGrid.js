import React from 'react';

import { DataGrid } from '@mui/x-data-grid';
import { Container, Box, Typography } from '../mui';
import { COL } from '../../globals/Constants';

function ComparisonGrid({ cars }) {
  console.log('Cars', cars);
  if (!cars) {
    return null;
  }

  const cols = [{ field: 'id', headerName: 'Feature', sortable: false }];
  const carIds = ['id'];
  for (let i = 0; i < cars.length; i += 1) {
    const car = cars[i];
    // console.log(car);
    cols.push({
      field: car.Id, minWidth: 150, sortable: false, headerName: `${car[COL.make]} ${car[COL.model]}`,
    });
    carIds.push(car.Id);
  }
  console.log('Cols', cols);
  const rows = [];
  // const transposed = Object.assign(...Object.keys(cars[0]).map((key) => (
  //   { [key]: cars.map((o) => o[key]) })));
  // console.log('Transposed', transposed);
  // const carsIds = transposed.Id;
  const featuresToProcess = ['Make', 'Model', 'Price'];
  for (let m = 0; m < featuresToProcess.length; m += 1) {
    const feature = featuresToProcess[m];
    const featureSet = { id: feature };
    for (let n = 0; n < cars.length; n += 1) {
      const thisCar = cars[n];
      featureSet[thisCar.Id] = thisCar[feature];
    }
    rows.push(featureSet);
  }

  // [
  //   { Feature: 'Price', Maruti-Celerio-1: ItsPrice, Maruti-Cel-2: JisPrice
  // ]

  // for (let k = 0; k < carIds.length; k += 1) {
  //   const carId = carIds[k];
  // //   const rowCol = {};
  // //   for (const carColumn in transposed) {
  // //     rowCol[carid] =
  // //   }
  // }

  console.log('Rows', rows);
  return (
    <DataGrid
      rows={rows}
      columns={cols}
      rowCount={featuresToProcess.length + 2}
      // pageSize={5}
      // rowsPerPageOptions={[5]}
      disableColumnFilter
      disableColumnMenu
      disableColumnSelectors
      disableSelectionOnClick
      sortable={false}
      editMode={false}

    />
  );
}

export default ComparisonGrid;

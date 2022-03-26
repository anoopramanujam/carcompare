import React from 'react';

// import { DataGrid } from '@mui/x-data-grid';
import {
  Container, Box, Typography, Paper,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
} from '../mui';
import { COL } from '../../globals/Constants';
import './Grid.css';

function ComparisonGrid({ cars }) {
  console.log('Cars', cars);
  if (!cars) {
    return null;
  }

  const cols = [{ id: 'id', label: '', minWidth: 100 }];
  const carIds = ['id'];
  for (let i = 0; i < cars.length; i += 1) {
    const car = cars[i];
    // console.log(car);
    cols.push({
      id: car.Id, minWidth: 150, label: `${car[COL.make]} ${car[COL.model]}`,
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

  console.log('Rows1', rows);
  return (

  // <Paper sx={{ overflow: 'auto' }}>
    <TableContainer component={Paper} sx={{ width: '100%', height: '100%' }}>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            {cols.map((column) => (
              <TableCell
                key={column.id}
                align={column.align}
                className={`${column.id === 'id' ? 'cc-stickyCol' : 'cc-nonSticky'}`}
                style={{ minWidth: column.minWidth }}
                // sx={{ bgcolor: 'blue' }}
                sx={{
                //   position: `${column.id === 'id' ? 'sticky' : 'relative'}`,
                  background: `${column.id === 'id' ? 'white' : ''}`,
                  zIndex: `${column.id === 'id' ? 10 : 1}`,
                }}
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
  // </Paper>

  );
}

export default ComparisonGrid;

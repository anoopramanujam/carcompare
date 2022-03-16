import React from 'react';
import carData from '../../data/carData';
import CarCard from './CarCard';

function Result() {
  console.log(carData);
  return (
    <div className="ui segment">
      <div className="ui internally celled grid">
        { carData.map((car) => <div key={car.Variant}><CarCard car={car} /></div>)}
      </div>
    </div>
  );
}

export default Result;

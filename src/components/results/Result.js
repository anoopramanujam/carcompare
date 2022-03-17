import React from 'react';
import carData from '../../data/carData';
import CarCard from './CarCard';

function Result() {
  console.log(carData);
  return (
    <div className="ui segment">
      <div className="ui grid">
        { carData.map((car) => (
          <React.Fragment key={`${car.Make}-${car.Model}-${car.Variant}`}>
            <CarCard car={car} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default Result;

import React from 'react';
import '../../globals/styles.css';

function CarCard({ car }) {
  return (
    <div className="ui card cc-margin">
      <div className="cc-margin">
        {car.Make}
        {' '}
        {car.Model}
        {' '}
        {car.Variant}
      </div>
    </div>
  );
}

export default CarCard;

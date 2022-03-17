import React from 'react';
import '../../globals/Styles.css';
import './CarCard.css';

function CarCard({ car }) {
  return (
    <div className="four wide column cc-card">
      <div className="cc-margin">
        {car.Make}
        <div className="cc-title">
          {car.Model}
          {' '}
          {car.Variant}
        </div>
        <hr />
        {car.Price}
        {' '}
        Lakhs
      </div>
    </div>
  );
}

export default CarCard;

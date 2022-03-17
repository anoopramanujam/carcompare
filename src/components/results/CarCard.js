import React from 'react';
import Col from 'react-bootstrap/Col';
import '../../globals/Styles.css';
import './CarCard.css';

function CarCard({ car }) {
  return (
    <Col>
      <div className="cc-margin cc-padding cc-border">
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
    </Col>
  );
}

export default CarCard;

import React from 'react';
import { Container, Row } from 'react-bootstrap';
import carData from '../../data/carData';
import CarCard from './CarCard';

function Result() {
  console.log(carData);
  return (
    <Container>
      <Row xs={4}>
        { carData.map((car) => (
          <React.Fragment key={`${car.Make}-${car.Model}-${car.Variant}`}>
            <CarCard car={car} />
          </React.Fragment>
        ))}
      </Row>
    </Container>
  );
}

export default Result;

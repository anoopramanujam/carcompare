import React from 'react';
import { Alert, AlertTitle, Typography } from '../mui';

function IntroMessage() {
  return (
    <Alert severity="info" icon={false}>
      <AlertTitle>Set your specs, choose your features and find your car!</AlertTitle>

      <ul>
        <li> 11 models and 33 variants</li>
        <li>(IN PROGRESS) Includes all cars in India which sells more than 2500 units a month</li>
        <li>Free and open-source</li>
        <li>
          TO BE INCLUDED SOON: Mahindra XUV 700, Nissan Magnite,
          Hyundai Aura, Honda Amaze, Renault Kiger, Tata Safari, Mahindra XUV 300,
          Toyota Urban Cruiser,  Tata Tigor, Maruti Ignis, Toyota Glanza
        </li>
      </ul>

    </Alert>
  );
}

export default IntroMessage;

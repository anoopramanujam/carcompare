import React from 'react';
import { Alert, AlertTitle, Typography } from '../mui';

function IntroMessage() {
  return (
    <Alert severity="info" icon={false}>
      <AlertTitle>Set your specs, choose your features and find your car!</AlertTitle>

      <ul>
        <li> 18 models and 187 variants</li>
        <li>(IN PROGRESS) Includes all cars in India which sells more than 1000 units a month</li>
        <li>Free and open-source</li>
        <li>
          TO BE INCLUDED SOON: Volkswagen Virtus, Kia Carens, Tata Altroz,
          Tata Tiago, Mahindra XUV 700, Nissan Magnite,  Hyundai Aura, Honda Amaze,
          Mahindra Scorpio, Hyundai Alcazar,  MG Hector, MG Astor, Volkswagen Taigun,
          Renault Kiger, Skoda Kushaq, Tata Harrier, Tata Safari, Mahindra XUV 300,
          Toyota Urban Cruiser,  Tata Tigor, Maruti Ignis, Hyundai Santro
        </li>
      </ul>

    </Alert>
  );
}

export default IntroMessage;

import React from 'react';
import { Alert, AlertTitle, Typography } from '../mui';

function IntroMessage() {
  return (
    <Alert severity="info" icon={false}>
      {/* <AlertTitle>Attention!</AlertTitle> */}
      <ul>
        <li>Over 16 models and more than 160 variants</li>
        <li>(IN PROGRESS) From all cars in India which sells more than 1000 units a month</li>
        <li>Free and open-source</li>
        <li>
          COMING SOON: Hyundai i20, Kia Carens, Tata Altroz, Mahindra XUV 300,
          Tata Tiago, Mahindra XUV 700,  Tata Tigor, Maruti Ignis
        </li>
      </ul>

    </Alert>
  );
}

export default IntroMessage;

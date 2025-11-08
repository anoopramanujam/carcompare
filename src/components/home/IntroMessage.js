import React from 'react';
import { useSelector } from 'react-redux';
import { Alert, AlertTitle, Typography } from '../mui';

function IntroMessage() {
  const cars = useSelector((state) => state.globalData.cars);

  // Calculate unique models and total variants
  const uniqueModels = new Set();
  cars.forEach((car) => {
    uniqueModels.add(`${car.Make} ${car.Model}`);
  });

  const modelsList = Array.from(uniqueModels).sort();

  return (
    <Alert severity="info" icon={false}>
      <AlertTitle>Set your specs, choose your features and find your electric car!</AlertTitle>

      <ul>
        <li>{uniqueModels.size} electric vehicle models and {cars.length} variants</li>
        <li>Free and open-source</li>
        <li>
          <strong>Included models:</strong> {modelsList.join(', ')}
        </li>
      </ul>

    </Alert>
  );
}

export default IntroMessage;

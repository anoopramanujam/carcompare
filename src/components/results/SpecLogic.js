import * as COL from '../../globals/ColConstants';
import { HATCH, SEDAN, SUV } from '../../globals/Constants';

const filterSpecs = (data, specFilters) => {
  const price = parseFloat(specFilters.price) || 1000;
  const {
    hatch, sedan, suv,
    petrol, diesel, manual, auto,
  } = specFilters;
  const results = data.filter((x) => (x[COL.price] <= price)
    && ((x[COL.fuel] === 'P' && petrol) || (x[COL.fuel] === 'D' && diesel))
    && (
      (x[COL.bodyType] === HATCH && hatch)
       || (x[COL.bodyType] === SEDAN && sedan)
        || (x[COL.bodyType] === SUV && suv)
    )
    && (
      (x[COL.transmission][0] === 'M' && manual)
      // Account for AMT, CVT, DCT, IVT
      || ((['A', 'C', 'D', 'I'].includes(x[COL.transmission][0])) && auto)
    ));
  return results;
};

export default filterSpecs;

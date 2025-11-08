import * as COL from '../../globals/ColConstants';
import { HATCH, SEDAN, SUV } from '../../globals/Constants';

const filterSpecs = (data, specFilters) => {
  const price = parseFloat(specFilters.price) || 1000;
  const { hatch, sedan, suv } = specFilters;
  const results = data.filter((x) => (x[COL.price] <= price)
    && (
      (x[COL.bodyType] === HATCH && hatch)
       || (x[COL.bodyType] === SEDAN && sedan)
        || (x[COL.bodyType] === SUV && suv)
    ));
  return results;
};

export default filterSpecs;

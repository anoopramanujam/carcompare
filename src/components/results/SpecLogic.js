import * as COL from '../../globals/ColConstants';

const filterSpecs = (data, specFilters) => {
  const price = parseFloat(specFilters.price) || 1000;
  const {
    petrol, diesel, manual, auto,
  } = specFilters;

  const results = data.filter((x) => (x[COL.price] <= price)
    && ((x[COL.fuel] === 'P' && petrol) || (x[COL.fuel] === 'D' && diesel))
    && (
      (x[COL.transmission][0] === 'M' && manual)
      || ((x[COL.transmission][0] === 'A' || x[COL.transmission][0] === 'C') && auto)
    ));
  return results;
};

export default filterSpecs;

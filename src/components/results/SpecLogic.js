const filterSpecs = (data, specFilters) => {
  // console.log(specFilters);

  const price = parseFloat(specFilters.price) || 1000;
  const {
    petrol, diesel, manual, auto,
  } = specFilters;

  const results = data.filter((x) => (x.Price <= price)
    && ((x.Fuel === 'P' && petrol) || (x.Fuel === 'D' && diesel))
    && ((x.Transmission[0] === 'M' && manual) || (x.Transmission[0] === 'A' && auto)));
  return results;
};

export default filterSpecs;

import axios from 'axios';

export default axios.create({
  baseURL: 'https://raw.githubusercontent.com/anoopramanujam/carcompare/ajax/src/data',
});

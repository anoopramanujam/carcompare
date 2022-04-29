import axios from 'axios';
import { API_BASE } from '../globals/Constants';

export default axios.create({
  baseURL: API_BASE,
});

import AXIOS from 'axios';
import { WEBTASK_CONFIG } from '../../../config';

const axios = AXIOS.create({
  baseURL: WEBTASK_CONFIG.uri,
});

export function setHeaders(headers) {
  axios.defaults.headers.common = {
    ...axios.defaults.headers.common,
    ...headers,
  }
}

export default axios;

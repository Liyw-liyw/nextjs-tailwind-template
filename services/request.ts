/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable node/no-deprecated-api */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import axios from 'axios';

import AppConfig from '@/utils/config';

const instance = axios.create({
  baseURL: AppConfig.baseUri,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 30000
});

export default instance;

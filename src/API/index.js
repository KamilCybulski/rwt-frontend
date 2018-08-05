/* eslint-disable import/prefer-default-export */

import httpsClient from './https_client';
import httpsEndpoints from './https_endpoints';

const { API_URL } = process.env;

export const { getCards } = httpsEndpoints(httpsClient(API_URL));

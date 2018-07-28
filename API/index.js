/* eslint-disable import/prefer-default-export */

import httpsClient from './https_client';
import httpsEndpoints from './https_endpoints';

const url = 'https://api.magicthegathering.io/v1';

export const { getCards } = httpsEndpoints(httpsClient(url));

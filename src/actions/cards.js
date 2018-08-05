export const CARDS_ACTIONS = {
  GET_CARDS_REQUEST: 'GET_CARDS_REQUEST',
  GET_CARDS_SUCCESS: 'GET_CARDS_SUCCESS',
  GET_CARDS_FAILURE: 'GET_CARDS_FAILURE',
};

export const getCardsRequest = cmc => ({
  type: CARDS_ACTIONS.GET_CARDS_REQUEST,
  payload: cmc,
});

export const getCardsSuccess = payload => ({
  type: CARDS_ACTIONS.GET_CARDS_SUCCESS,
  payload,
});

export const getCardsFailure = error => ({
  type: CARDS_ACTIONS.GET_CARDS_FAILURE,
  error,
});

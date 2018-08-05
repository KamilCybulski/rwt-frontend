import { CARDS_ACTIONS } from '../actions';

const initialState = {
  cards: [],
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CARDS_ACTIONS.GET_CARDS_SUCCESS:
      return {
        ...state,
        cards: action.payload,
      };

    case CARDS_ACTIONS.GET_CARDS_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default reducer;

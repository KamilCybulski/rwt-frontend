import { takeEvery, put } from 'redux-saga/effects';

import { CARDS_ACTIONS, getCardsSuccess, getCardsFailure } from '../actions';
import * as API from '../API';

export function* logIncrement({ payload }) {
  try {
    const { data: { cards } } = yield API.getCards(payload);
    yield put(getCardsSuccess(cards));
  } catch (error) {
    yield getCardsFailure(error);
  }
}

export default function* watcher() {
  yield takeEvery(CARDS_ACTIONS.GET_CARDS_REQUEST, logIncrement);
}

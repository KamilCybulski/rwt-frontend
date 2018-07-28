import { all } from 'redux-saga/effects';

import cards from './cards';

export default function* rootSaga() {
  yield all([
    cards(),
  ]);
}

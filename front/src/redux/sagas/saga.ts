import { spawn } from 'redux-saga/effects';
import watchRequestToLoadSaga from './watchRequestToLoadSaga';
import watchRequestToAddSaga from './watchRequestToAddNews';

export default function* saga() {
  yield spawn(watchRequestToLoadSaga);
  yield spawn(watchRequestToAddSaga);
}

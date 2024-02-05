import { take } from '@redux-saga/core/effects';
import { newsActions } from '../slices/newsSlice';
import { call, put, retry } from 'redux-saga/effects';
import fetchAPI from '../../services/fetchAPI.client';
import { NewsPortalItemProps } from '../../components/NewsPortal/Item/NewsPortal-Item';

function* handlerRequest() {
  try {
    const news: NewsPortalItemProps[] = yield retry(3, 1000, fetchAPI);
    yield put(newsActions.successRequest(news));
  } catch {
    yield put(newsActions.failureRequest('Ошибка загрузки'));
  }
}

export default function* watchRequestToLoadSaga() {
  while (true) {
    yield take(newsActions.requestNews.type);
    yield call(handlerRequest);
  }
}

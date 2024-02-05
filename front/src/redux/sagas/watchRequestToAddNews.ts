import { call, put, retry, take } from 'redux-saga/effects';
import { AddNewsRequestAction, newsActions } from '../slices/newsSlice';
import { NewsPortalItemProps } from '../../components/NewsPortal/Item/NewsPortal-Item';
import fetchAPI from '../../services/fetchAPI.client';

const filterRequestToAdd = ({ type, payload }: { type: string; payload?: number | string }) => {
  return (
    type === newsActions.requestToAddNews.type &&
    payload &&
    typeof payload === 'number' &&
    String(payload).trim() !== ''
  );
};

function* handlerRequest(action: AddNewsRequestAction) {
  try {
    const news: NewsPortalItemProps[] = yield retry(3, 1000, fetchAPI, String(action.payload));
    yield put(newsActions.successRequest(news));
    if (news.length < 5) {
      yield put(newsActions.setOverflow());
    }
  } catch {
    yield put(newsActions.failureRequest('Ошибка загрузки'));
  }
}

export default function* watchRequestToAddSaga() {
  while (true) {
    const action: AddNewsRequestAction = yield take(filterRequestToAdd);
    yield call(handlerRequest, action);
  }
}

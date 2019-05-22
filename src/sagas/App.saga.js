import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchDataSuccess } from '../actions/App.actions';
import {FETCH_DATA} from '../constants/App.constant';
import {getData} from '../utils/api';
export function* fetchData({ link }) {
  try {
    const response = yield call(getData, link);
    yield put(fetchDataSuccess(response, link));
  } catch (error) {
  } finally {
  }
}


export default function* sagas() {
  yield takeLatest(FETCH_DATA, fetchData);

}
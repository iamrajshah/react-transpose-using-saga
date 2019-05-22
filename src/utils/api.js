import { call } from 'redux-saga/effects';
import request from './request';

function* requestWrapper({ requestURL, method, body }) {
  try {
    const response = yield call(request, requestURL, {
      method,
      body,
    });
    return response;
  } catch (error) {throw error;}
}

export function* getData(link) {
  const response = yield call(requestWrapper, {
    requestURL: link,
    method: 'GET',
  });
  return response;
}
import {FETCH_DATA, FETCH_SUCCESS} from '../constants/App.constant';

export function fetchData(link) {
  return {
    type: FETCH_DATA,
    link,
  };
}

export function fetchDataSuccess(data, url) {
  return {
    type: FETCH_SUCCESS,
    data,
    url,
  };
}


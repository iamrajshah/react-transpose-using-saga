import {FETCH_SUCCESS} from '../constants/App.constant';

export const initialState = {
  source:'https://jsonplaceholder.typicode.com/posts',
  tableData: [],
};

function AppReducer(state = initialState, action) {
  switch(action.type) {
    case FETCH_SUCCESS: return {...state, tableData:action.data, source:action.url};
    default: return state;
  }
}

export default AppReducer;
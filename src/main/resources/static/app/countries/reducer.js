import {
  REQUEST_COUNTRIES,
  RECEIVE_COUNTRIES,
  CHANGE_FILTER
} from './actions';

const initialState = {
  items: null,
  isFetching: false,
  filter: ''
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return Object.assign({}, state, {
        filter: action.filter
      });
    case RECEIVE_COUNTRIES:
      return Object.assign({}, state, {
        items: action.response.countries,
        isFetching: false
      });
    case REQUEST_COUNTRIES:
      return Object.assign({}, state, {
        items: [],
        isFetching: true
      });
    default:
      return state;
  }
};

export default countriesReducer;

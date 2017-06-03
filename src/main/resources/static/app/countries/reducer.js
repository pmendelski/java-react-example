import { CHANGE_FILTER, RECEIVE_COUNTRIES, REQUEST_COUNTRIES } from './actions';

const requestCountries = () => ({
  items: null
});

const receiveCountries = (state, action) => ({
  items: action.response.countries
});

const changeFilter = (state, action) => ({
  filter: action.filter
});

const handlers = {
  [REQUEST_COUNTRIES]: requestCountries,
  [RECEIVE_COUNTRIES]: receiveCountries,
  [CHANGE_FILTER]: changeFilter
};

const initialState = {
  items: null,
  filter: ''
};

const countriesReducer = (state = initialState, action) => {
  const handler = handlers[action.type];
  return handler ?
    Object.assign({}, state, handler(state, action)) :
    state;
};

export default countriesReducer;

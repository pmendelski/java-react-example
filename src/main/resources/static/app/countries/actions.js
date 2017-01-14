export const CHANGE_FILTER = 'CHANGE_FILTER';
export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter
});

export const REQUEST_COUNTRIES = 'REQUEST_COUNTRIES';
export const requestCountries = () => ({
  type: REQUEST_COUNTRIES
});

export const RECEIVE_COUNTRIES = 'RECEIVE_COUNTRIES';
export const receiveCountries = response => ({
  type: RECEIVE_COUNTRIES,
  response
});

export const fetchCountries = () =>
  (dispatch) => {
    dispatch(requestCountries());
    return fetch('./countries.json')
      .then(response => response.json())
      .then(json => dispatch(receiveCountries(json)));
  };

const shouldFetchCountries = (state) => {
  const countries = state.countries;
  return !countries.items && !countries.isFetching;
};

export const fetchCountriesIfNeeded = () =>
  (dispatch, getState) => (
    shouldFetchCountries(getState()) ?
      dispatch(fetchCountries()) :
      null
  );

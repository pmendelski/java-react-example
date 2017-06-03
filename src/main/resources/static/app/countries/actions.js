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
    return setTimeout(
      () => fetch('/api/countries')
        .then(response => response.json())
        .then(json => dispatch(receiveCountries(json)))
      , 500);
  };

export const CHANGE_FILTER = 'CHANGE_FILTER';
export const changeFilter = filter => ({
  type: CHANGE_FILTER,
  filter
});

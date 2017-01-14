import React, { PropTypes } from 'react';

const CountryList = ({ countries }) => {
  const items = countries
    .map(country => (<li key={country}>{country}</li>));
  return (<ul>{items}</ul>);
};

CountryList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.string)
};

export default CountryList;

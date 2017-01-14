import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { changeFilter } from './actions';
import CountryList from './CountryList';

const CountryListing = ({ items, filter, dispatch }) => {
  const handleFilterChange = (e) => {
    const newFilter = e.target.value;
    dispatch(changeFilter(newFilter));
  };
  const filtered = items
    .filter(item => item.includes(filter));
  return (
    <div>
      <input onChange={handleFilterChange} value={filter} />
      <CountryList countries={filtered} />
    </div>
  );
};

CountryListing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  filter: PropTypes.string
};

const mapStateToProps = state => state.countries;

export default connect(mapStateToProps)(CountryListing);

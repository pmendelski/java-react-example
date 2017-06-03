import React from 'react';
import { connect } from 'react-redux';
import { fetchCountries } from './actions';
import CountryList from './CountryList';
import LazyComponent from '../components/LazyComponent';

const mapState = state => ({
  isReady: !!state.countries.items,
  children: <CountryList />
});

const mapDispatch = dispatch => ({
  load: () => dispatch(fetchCountries())
});

const Countries = connect(mapState, mapDispatch)(LazyComponent);

export default Countries;

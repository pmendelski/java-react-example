import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchCountriesIfNeeded } from './actions';
import CountryListing from './CountryListing';
import Loading from '../components/Loading';

class Countries extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCountriesIfNeeded());
  }
  render() {
    return this.props.isLoaded ?
      <CountryListing /> :
      <Loading />;
  }
}

Countries.propTypes = {
  isLoaded: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isLoaded: (state.countries.items != null &&
    !state.countries.isFetching)
});

export default connect(mapStateToProps)(Countries);

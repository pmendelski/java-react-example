import { connect } from 'react-redux';
import { changeFilter } from './actions';
import FilterableList from '../components/FilterableList';

const mapStateToProps = state => ({
  items: state.countries.items,
  filter: state.countries.filter
});

const mapDispatchToProps = dispatch => ({
  onFilterChange: (filter) => dispatch(changeFilter(filter))
});

const CountryList = connect(mapStateToProps, mapDispatchToProps)(FilterableList);

export default CountryList;

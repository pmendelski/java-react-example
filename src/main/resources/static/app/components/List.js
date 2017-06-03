import React, { PropTypes } from 'react';

const List = ({ items }) => {
  const listItems = items.map(item => <li key={item}>{item}</li>);
  return <ul>{listItems}</ul>;
};

List.defaultProps = {
  items: []
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default List;

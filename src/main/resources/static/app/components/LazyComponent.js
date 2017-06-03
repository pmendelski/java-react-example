import React, { Component, PropTypes } from 'react';
import Loading from '../components/Loading';

class LazyComponent extends Component {
  componentDidMount() {
    this.props.load();
  }

  render() {
    const children = this.props.children;
    return this.props.isReady ?
      <div>{ children }</div> :
      <Loading />;
  }
}

LazyComponent.defaultProps = {
  isReady: true,
  load: () => {}
};

LazyComponent.propTypes = {
  load: PropTypes.func.isRequired,
  isReady: PropTypes.bool.isRequired,
  children: PropTypes.element.isRequired
};

export default LazyComponent;

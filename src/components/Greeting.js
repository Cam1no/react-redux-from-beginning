import React from 'react';
import PropTypes from 'prop-types';

export default class Greeting extends React.Component {
  render() {
    return (
      <div>
        Hi {this.props.name}
      </div>
    );
  }
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
};

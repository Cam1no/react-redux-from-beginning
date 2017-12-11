import React from 'react';
import PropTypes from 'prop-types';

export default class SearchFrom extends React.Component {
  render() {
    return (
      <form onSubmit={(e) => this.props.onSubmit(e)}>
        <input
          type="text"
          value={this.props.place}
          onChange={(e) => this.props.onChangePlace(e.target.value)}
        />
        <input type="submit" value="検索"/>
      </form>
    );
  }
}

SearchFrom.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChangePlace: PropTypes.func.isRequired,
  place: PropTypes.string.isRequired,
};

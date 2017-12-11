import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  place: state.place,
});

const mapDispatchToProps = (dispatch) => ({
  onPlaceChange: place => dispatch({ type: 'CHANGE_PLACE', place }),
});

export class SearchFrom extends React.Component {
  render() {
    return (
      <form onSubmit={e => this.props.onSubmit(e)}>
        <input
          type="text"
          value={this.props.place}
          onChange={e => {
            e.preventDefault();
            this.props.onPlaceChange(e.target.value)
          }}
        />
        <input type="submit" value="検索"/>
      </form>
    );
  }
}

const ConnectedSearchForm = connect(mapStateToProps, mapDispatchToProps)(SearchFrom);

export default ConnectedSearchForm;

SearchFrom.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onPlaceChange: PropTypes.func.isRequired,
  place: PropTypes.string.isRequired,
};

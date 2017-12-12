import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { searchHotelByLocation } from '../domain/HotelRepository'
import { setPlace, startSearch } from '../actions/'

export class SearchFrom extends React.Component {
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.startSearch();
        }}
      >
        <input
          type="text"
          value={this.props.place}
          onChange={e => {
            e.preventDefault();
            this.props.setPlace(e.target.value)
          }}
        />
        <input type="submit" value="検索"/>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  place: state.place,
});

export default connect(mapStateToProps, {setPlace, startSearch})(SearchFrom);

SearchFrom.propTypes = {
  startSearch: PropTypes.func.isRequired,
  setPlace: PropTypes.func.isRequired,
  place: PropTypes.string.isRequired,
};

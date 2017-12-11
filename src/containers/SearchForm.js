import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { geocode } from '../domain/Geocoder'
import { searchHotelByLocation } from '../domain/HotelRepository'

export class SearchFrom extends React.Component {
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          this.props.onSubmit(this.props.place);
        }}
      >
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

const mapStateToProps = state => ({
  place: state.place,
});

const mapDispatchToProps = (dispatch) => ({
  onPlaceChange: place => dispatch({ type: 'CHANGE_PLACE', place }),
  onSubmit: (place) => {
    geocode(place)
      .then(({ status, address, location }) => {
        switch (status) {
          case 'OK':{
            dispatch({type: 'GEOCODE_FETCHED', address, location})
            // return searchHotelByLocation(location);
            break;
          }
          case 'ZERO_RESULTS': {
            // this.setErrorMessage('結果が見つかりませんでした');
            break;
          }
          default:{
            // this.setErrorMessage('エラーが発生しました');
          }
        }
        return [];
      })
      // .then((hotels) => {
      //   this.setState({ hotels: sortedHotels(hotels, this.state.sortKey) })
      // })
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchFrom);

SearchFrom.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onPlaceChange: PropTypes.func.isRequired,
  place: PropTypes.string.isRequired,
};

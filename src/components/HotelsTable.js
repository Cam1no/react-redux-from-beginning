import React from 'react';
import PropTypes from 'prop-types';
import HotelsRow from './HotelsRow'
import HotelsClickableTh from './HotelsClickableTh';
import { connect } from 'react-redux';
import _ from 'lodash';

export const HotelsTable = ({ hotels }) => {
  return (
    <table>
      <thead>
        <tr>
          <HotelsClickableTh
            label='サムネイル'
            sortKey='thumbnail'
          />
          <HotelsClickableTh
            label='ホテル名'
            sortKey='name'
          />
          <HotelsClickableTh
            label='料金'
            sortKey='minPrice'
          />
          <HotelsClickableTh
            label='レビュー'
            sortKey='reviewAverage'
          />
          <HotelsClickableTh
            label='レビュー数'
            sortKey='reviewCount'
          />
          <HotelsClickableTh
            label='距離'
            sortKey='distance'
          />
        </tr>
      </thead>
      <tbody>
        {hotels.map(hotel => {
          return <HotelsRow key={hotel.id} hotel={hotel}/>;
        })}
      </tbody>
    </table>
  );
}

HotelsTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any),
};

const sortedHotels = (hotels, sortKey) => _.sortBy(hotels, h => h[sortKey]);

const mapStateToProps = state => ({
  hotels: sortedHotels(state.hotels, state.sortKey),
});

export default connect(mapStateToProps)(HotelsTable);

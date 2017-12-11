import React from 'react';
import PropTypes from 'prop-types';
import HotelsRow from './HotelsRow'
import HotelsClickableTh from './HotelsClickableTh';

export const HotelsTable = ({ hotels, sortKey, onSort }) => {
  return (
    <table>
      <thead>
        <tr>
          <HotelsClickableTh
            label='サムネイル'
            sortKey='thumbnail'
            isSelected = { sortKey === 'thumbnail' }
            onSort={key => onSort(key)}
          />
          <HotelsClickableTh
            label='ホテル名'
            sortKey='name'
            isSelected = { sortKey === 'name' }
            onSort={key => onSort(key)}
          />
          <HotelsClickableTh
            label='料金'
            sortKey='minPrice'
            isSelected = { sortKey === 'minPrice' }
            onSort={key => onSort(key)}
          />
          <HotelsClickableTh
            label='レビュー'
            sortKey='reviewAverage'
            isSelected = { sortKey === 'reviewAverage' }
            onSort={key => onSort(key)}
          />
          <HotelsClickableTh
            label='レビュー数'
            sortKey='reviewCount'
            isSelected = { sortKey === 'reviewCount' }
            onSort={key => onSort(key)}
          />
          <HotelsClickableTh
            label='距離'
            sortKey='distance'
            isSelected = { sortKey === 'distance' }
            onSort={key => onSort(key)}
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

export default HotelsTable;

HotelsTable.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.any),
  sortKey: PropTypes.string,
  onSort: PropTypes.func.isRequired,
};

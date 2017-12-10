import React from 'react';
import PropTypes from 'prop-types';
import HotelsRow from './HotelsRow'

export const HotelsTable = ({ hotels }) => {
  return (
    <table>
      <thead>
        <tr><th>サムネイル</th><th>ホテル名</th><th>料金</th></tr>
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
};

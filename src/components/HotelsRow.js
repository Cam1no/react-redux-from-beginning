import React from 'react';
import PropTypes from 'prop-types';

export const HotelsRow = ({ hotel }) => {
  return (
    <tr>
      <td><img src={hotel.thumbnail} alt={hotel.name}/></td>
      <td><a href={hotel.url} target='_blank'>{hotel.name}</a></td>
      <td>{hotel.minPrice ? `${hotel.minPrice}円` : '空室なし'}</td>
      <td>{hotel.reviewAverage ? hotel.reviewAverage : 0}</td>
      <td>{hotel.reviewCount ? hotel.reviewCount : 0}</td>
      <td>{hotel.distance}</td>
    </tr>
  );
}

export default HotelsRow;

HotelsRow.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    minPrice: PropTypes.number,
    reviewAverage: PropTypes.number,
    reviewCount: PropTypes.number,
    distance: PropTypes.number.isRequired,
  }).isRequired,
};

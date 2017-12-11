import React from 'react';
import PropTypes from 'prop-types';

export const HotelsRow = ({ hotel }) => {
  return (
    <tr>
      <td><img src={hotel.thumbnail} alt={hotel.name}/></td>
      <td><a href={hotel.url} target='_blank'>{hotel.name}</a></td>
      <td>{hotel.minPrice}</td>
      <td>{hotel.reviewAverage}</td>
      <td>{hotel.reviewCount}</td>
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
    minPrice: PropTypes.string.isRequired,
    reviewAverage: PropTypes.number.isRequired,
    reviewCount: PropTypes.number.isRequired,
    distance: PropTypes.number.isRequired,
  }).isRequired,
};

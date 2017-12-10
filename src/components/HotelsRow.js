import React from 'react';
import PropTypes from 'prop-types';

export const HotelsRow = ({ hotel }) => {
  return (
    <tr>
      <td><img src={hotel.thumbnail}/></td>
      <td><a href={hotel.url} target='_blank'>{hotel.name}</a></td>
      <td>{hotel.minPrice}</td>
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
  }).isRequired,
};

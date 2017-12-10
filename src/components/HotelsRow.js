import React from 'react';
import PropTypes from 'prop-types';

export const HotelsRow = ({ hotel }) => {
  return (
    <tr>
      <td><a href={hotel.url} target='_blank'>{hotel.name}</a></td>
    </tr>
  );
}

export default HotelsRow;

HotelsRow.propTypes = {
  hotel: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

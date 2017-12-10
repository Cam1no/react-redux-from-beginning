import React from 'react';
import PropTypes from 'prop-types';

export const HotelsRow = ({ hotel }) => {
  console.log(hotel);
  return (
    <tr>
      <td>{hotel.name}</td>
    </tr>
  );
}

export default HotelsRow;

HotelsRow.propTypes = {
  hotel: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

import React from 'react';
import PropTypes from 'prop-types';

export const GeocodeResult = ({ address, location }) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      <li>住所: {address}</li>
      <li>緯度: {location.lat}</li>
      <li>経度: {location.lng}</li>
    </ul>
  );
}

export default GeocodeResult;

GeocodeResult.propTypes = {
  address: PropTypes.string.isRequired,
  location: PropTypes.objectOf(PropTypes.number).isRequired,
};

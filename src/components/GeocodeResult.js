import React from 'react';
import PropTypes from 'prop-types';

export const GeocodeResult = ({ address, lat, lng }) => {
  return (
    <ul style={{ listStyle: 'none' }}>
      <li>住所: {address}</li>
      <li>緯度: {lat}</li>
      <li>経度: {lng}</li>
    </ul>
  );
}

export default GeocodeResult;

GeocodeResult.propTypes = {
  address: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

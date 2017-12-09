import React from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const InnerMap = withGoogleMap(({ location, isMarkerShown }) => (
  <GoogleMap
    defaultZoom={16}
    defaultCenter={location}
  >
    {isMarkerShown && <Marker position={location} />}
  </GoogleMap>
));

const Map = ({ location }) => (
  <InnerMap
    containerElement={<div style={{ height: `400px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
    location={location}
    isMarkerShown={true}
  />
);

export default Map;

Map.propTypes = {
  location: PropTypes.objectOf(PropTypes.number).isRequired,
};

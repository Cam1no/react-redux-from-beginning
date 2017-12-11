import { combineReducers } from 'redux';

const place = (state = "東京タワー", action) => {
  switch (action.type) {
    case 'CHANGE_PLACE':
      return action.place;
    default:
      return state;
  }
};

const geocodeResult = (
  state = {
    address: '',
    location: { lat: 35.658581, lng: 139.745433 },
  },
  action
) => {
  switch (action.type) {
    case 'GEOCODE_FETCHED':
      return {
        address: action.address,
        location: action.location,
      };
    default:
      return state;
  }
};


export default combineReducers({ place, geocodeResult });

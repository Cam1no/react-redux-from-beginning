import React from 'react';
import GeocodeResult from './GeocodeResult';
import SearchForm from './SearchForm';
import Map from './Map';

import axios from 'axios';
import  PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      place: '東京タワー',
      address: '',
      location: {
        lat: 35.658581,
        lng: 139.745433,
      },
    }
  }

  setErrorMessage(message) {
    this.this.setState({
      address: message,
      location: {
        lat: 0,
        lng: 0,
      },
    })
  }

  handlePlaceSubmit(place){
    axios
      .get(GEOCODE_ENDPOINT, { params: {address: place} })
      .then((results) => {
        const data = results.data;
        const result = data.results[0];
        switch (data.status) {
          case 'OK': {
            const location = result.geometry.location;
            this.setState({
              address: result.formatted_address,
              location: location,
            });
            break;
          }
          case 'ZERO_RESULTS': {
            this.setErrorMessage('エラーが起きました.');
            break;
          }
          default: {
            this.setErrorMessage('エラーが起きました.');
          }
        }
      })
      .catch((error) => {
        this.setErrorMessage('通信に失敗しました.');
      });
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={ { textAlign: 'center', cursor: 'none' } }>
          <h1>緯度経度検索</h1>
          <SearchForm onSubmit={place => this.handlePlaceSubmit(place)}/>
          <GeocodeResult
            address={this.state.address}
            location={this.state.location}
          />
          <Map location={ this.state.location }/>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
};

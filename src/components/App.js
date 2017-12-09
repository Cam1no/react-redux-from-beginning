import React from 'react';
import GeocodeResult from './GeocodeResult';
import SearchForm from './SearchForm';
import Map from './Map';

import  PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      place: '',
      lat: 35.658581,
      lng: 139.745433,
    }
  }

  handlePlaceSubmit(place){
    this.setState({place})
  }

  render() {
    return (
      <MuiThemeProvider>
        <div style={ { textAlign: 'center', cursor: 'none' } }>
          <h1>緯度経度検索</h1>
          <SearchForm onSubmit={place => this.handlePlaceSubmit(place)}/>
          <GeocodeResult
            address={this.state.address}
            lat={this.state.lat}
            lng={this.state.lng}
          />
          <Map location={ { lat: this.state.lat, lng: this.state.lng } }/>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
};

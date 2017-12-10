import React from 'react';
import GeocodeResult from './GeocodeResult';
import SearchForm from './SearchForm';
import Map from './Map';
import { geocode } from '../domain/Geocoder'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Grid from 'material-ui/Grid';
import HotelsTable from './HotelsTable'

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
      hotels: [
        { name: 'ホテルオークラ'},
        { name: 'アパホテル'},
        { name: 'ロワジールホテル'},
      ],
    }
  }

  setErrorMessage(message) {
    this.setState({
      address: message,
      location: {
        lat: 0,
        lng: 0,
      },
    })
  }

  handlePlaceSubmit(place){
    geocode(place)
      .then(({ status, address, location }) => {
        switch (status) {
          case 'OK':{
            this.setState({ address, location});
            break;
          }
          case 'ZERO_RESULTS': {
            this.setErrorMessage('結果が見つかりませんでした');
            break;
          }
          default:{
            this.setErrorMessage('エラーが発生しました');
          }
        }
      })
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
          <div style={{width: '1000px', margin: 'auto'}}>
            <Grid container>
              <Grid item xs={6}>
                <Map location={ this.state.location }/>
              </Grid>
              <Grid item xs={6}>
                <HotelsTable hotels={this.state.hotels}/>
              </Grid>
            </Grid>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
};

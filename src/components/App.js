import React from 'react';
import GeocodeResult from './GeocodeResult';
import SearchForm from './SearchForm';
import Map from './Map';
import { geocode } from '../domain/Geocoder'
import { searchHotelByLocation } from '../domain/HotelRepository'
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
        { id: 12, name: 'ホテルオークラ', url: 'http://google.com'},
        { id: 1212, name: 'アパホテル', url: 'http://google.com'},
        { id: 1243, name: 'ロワジールホテル', url: 'http://google.com'},
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
            return searchHotelByLocation(location);
          }
          case 'ZERO_RESULTS': {
            this.setErrorMessage('結果が見つかりませんでした');
            break;
          }
          default:{
            this.setErrorMessage('エラーが発生しました');
          }
        }
        return [];
      })
      .then((hotels) => {
        this.setState({ hotels })
      })
  }

  render() {
    return (
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
              <h2>ホテル検索結果</h2>
              <HotelsTable hotels={this.state.hotels}/>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

App.propTypes = {
};

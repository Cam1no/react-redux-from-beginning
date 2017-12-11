import React from 'react';
import GeocodeResult from './GeocodeResult';
import SearchForm from '../containers/SearchForm';
import Map from './Map';
import { geocode } from '../domain/Geocoder'
import { searchHotelByLocation } from '../domain/HotelRepository'
import Grid from 'material-ui/Grid';
import HotelsTable from './HotelsTable'
import _ from 'lodash';
import queryString from 'query-string';

const sortedHotels = (hotels, sortKey) => _.sortBy(hotels, h => h[sortKey]);

export class SearchPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      place: this.getPlaceParam() || '東京タワー',
      address: '',
      location: {
        lat: 35.658581,
        lng: 139.745433,
      },
      hotels: [
        { id: 12, name: 'ホテルオークラ', url: 'http://google.com', minPrice: 0, thumbnail: '', reviewAverage: 1, reviewCount: 1, distance: 100},
        { id: 1212, name: 'アパホテル', url: 'http://google.com', minPrice: 0, thumbnail: '', reviewAverage: 1, reviewCount: 1, distance: 100},
        { id: 1243, name: 'ロワジールホテル', url: 'http://google.com', minPrice: 0, thumbnail: '', reviewAverage: 1, reviewCount: 1, distance: 100},
      ],
      sortKey: 'minPrice',
    }
  }

  componentDidMount() {
    // const place = this.getPlaceParam();
    // if (place && place.length > 0){
    //   this.startSearch(place);
    // }
  }

  getPlaceParam() {
    const params = queryString.parse(this.props.location.search);
    const place = params.place;
    if (place && place.length > 0){
      return place;
    }
    return null;
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

  handlePlaceSubmit(e){
    e.preventDefault();
    this.props.history.push(`/?place=${this.state.place}`);
    this.startSearch(this.state.place);
  }

  startSearch(place){
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
        this.setState({ hotels: sortedHotels(hotels, this.state.sortKey) })
      })
  }

  handleSortKeyChange(sortKey){
    console.log(sortKey);
    this.setState({ sortKey, hotels: sortedHotels(this.state.hotels, sortKey) })
  }

  render() {
    console.log(this.props);
    return (
      <div style={ { textAlign: 'center'} }>
        <h1>ホテル検索</h1>
        <SearchForm
          onSubmit={(e) => this.handlePlaceSubmit(e)}
        />
        <GeocodeResult
          address={this.state.address}
          location={this.state.location}
        />
        <div style={{width: '100%', margin: 'auto'}}>
          <Grid container>
            <Grid item xs={6}>
              <Map location={ this.state.location }/>
            </Grid>
            <Grid item xs={6}>
              <h2>ホテル検索結果</h2>
              <HotelsTable
                hotels={this.state.hotels}
                sortKey={this.state.sortKey}
                onSort={(sortKey) => this.handleSortKeyChange(sortKey)}
              />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default SearchPage;

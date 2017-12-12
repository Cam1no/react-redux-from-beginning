import React from 'react';
import GeocodeResult from '../components/GeocodeResult';
import SearchForm from './SearchForm';
import Map from '../components/Map';
import Grid from 'material-ui/Grid';
import HotelsTable from '../components/HotelsTable'
import queryString from 'query-string';
import { connect } from 'react-redux';

export class SearchPage extends React.Component {
  getPlaceParam() {
    const params = queryString.parse(this.props.location.search);
    const place = params.place;
    if (place && place.length > 0){
      return place;
    }
    return null;
  }

  render() {
    return (
      <div style={ { textAlign: 'center'} }>
        <h1>ホテル検索</h1>
        <SearchForm/>
        <GeocodeResult
          address={this.props.geocodeResult.address}
          location={this.props.geocodeResult.location}
        />
        <div style={{width: '100%', margin: 'auto'}}>
          <Grid container>
            <Grid item xs={6}>
              <Map location={ this.props.geocodeResult.location }/>
            </Grid>
            <Grid item xs={6}>
              <h2>ホテル検索結果</h2>
              <HotelsTable />
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  geocodeResult: state.geocodeResult,
});

export default connect(mapStateToProps)(SearchPage);

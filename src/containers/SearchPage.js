import React from 'react';
import GeocodeResult from '../components/GeocodeResult';
import SearchForm from './SearchForm';
import Map from '../components/Map';
import Grid from 'material-ui/Grid';
import HotelsTable from '../components/HotelsTable'
import { connect } from 'react-redux';
import { startSearch } from '../actions';

export class SearchPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(startSearch())
  }
  render() {
    return (
      <div style={ { textAlign: 'center'} }>
        <h1>ホテル検索</h1>
        <SearchForm history={this.props.history}/>
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

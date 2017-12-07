import React from 'react';
import GeocodeResult from './GeocodeResult';
import SearchForm from './SearchForm';

import  PropTypes from 'prop-types';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { AppBar, MenuItem, Drawer } from 'material-ui';

export default class App extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div style={ { textAlign: 'center', cursor: 'none' } }>
        <h1>緯度経度検索</h1>
        <SearchForm />
        <GeocodeResult />
      </div>
    );
  }
}

App.propTypes = {
};

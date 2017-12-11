import React from 'react';
import SearchPage from './SearchPage';
import Grid from 'material-ui/Grid';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Grid container>
          <Grid item xs={3}>
            <div style={{ width: '60%', 'background-color': '#dcdddf', height: '1000px', padding: '50px' }}>
              <ul style={{ 'list-style': 'none' }}>
                <li><a href="#">Top</a></li>
                <li><a href="#">About</a></li>
              </ul>
            </div>
          </Grid>
          <Grid item xs={9}>
            <SearchPage />
          </Grid>
        </Grid>
      </div>
    );
  }
}

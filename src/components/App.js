import React from 'react';
import SearchPage from './SearchPage';
import AboutPage from './AboutPage';
import Grid from 'material-ui/Grid';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Grid container>
            <Grid item xs={3}>
              <div style={{ width: '60%', 'background-color': '#dcdddf', height: '1000px', padding: '50px' }}>
                <ul style={{ 'list-style': 'none' }}>
                  <li><Link to="/">Top</Link></li>
                  <li><Link to="/about">About</Link></li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={9}>
              <Switch>
                <Route exact path='/' component={SearchPage}></Route>
                <Route exact path='/about' component={AboutPage}></Route>
              </Switch>
            </Grid>
          </Grid>
        </div>
      </Router>
    );
  }
}

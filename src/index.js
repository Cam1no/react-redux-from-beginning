import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SearchPage from './containers/SearchPage';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore } from 'redux';
import reducer from './reducers/'

const store = createStore(reducer)

injectTapEventPlugin();

ReactDOM.render(
  <SearchPage
    history={window.history}
    location={window.location}
    store={store}
  />,
  document.getElementById('root')
);
registerServiceWorker();

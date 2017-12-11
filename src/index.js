import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SearchPage from './components/SearchPage';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore } from 'redux';
import reducer from './reducers/'
import { Provider } from 'react-redux';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <SearchPage
      history={window.history}
      location={window.location}
    />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();

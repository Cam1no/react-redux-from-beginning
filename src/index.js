import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import SearchPage from './containers/SearchPage';
import registerServiceWorker from './registerServiceWorker';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers/'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

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

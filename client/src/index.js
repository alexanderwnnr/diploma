import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/app/App';

import myService from './services/myService'
import { ServiceProvider } from './serviceContext/serviceContext'
import store from './store'

const service = new myService()

ReactDOM.render(
  <Provider store={store}>
    <ServiceProvider value={service}>
      <Router>
        <App />
      </Router>
    </ServiceProvider>
  </Provider>,
   document.getElementById('root')
);

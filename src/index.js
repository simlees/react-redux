import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import Layout from './components/Layout';
import store from './store';

ReactDOM.render(<Provider store={store}>
  <Layout />
</Provider>, document.getElementById('app'));
registerServiceWorker();

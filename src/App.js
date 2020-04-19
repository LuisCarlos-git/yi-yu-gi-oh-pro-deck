import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './Config/reactotron';

import Global from './style/global';

import { store, persistor } from './store';
import Routes from './routes';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Routes />
          <ToastContainer autoClose={3000} />
          <Global />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;

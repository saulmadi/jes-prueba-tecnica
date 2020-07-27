import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createClient, ClientContextProvider } from 'react-fetching-library';


const client = createClient({

    requestInterceptors: [],
    responseInterceptors: [],
});

ReactDOM.render(
  <ClientContextProvider client={client}>
      <Suspense fallback={<span>loading...</span>}>
          <App />
      </Suspense>
  </ClientContextProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

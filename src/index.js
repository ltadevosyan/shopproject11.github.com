import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter}  from "react-router-dom";

import { Provider } from 'react-redux';
//es erkrord toxn ei grel  Karlenenq arajiny
/*1*/import {store} from "./hooks";
/*2 import store from './redux/store';*/

/*<Provider store ={store}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
    </Provider>


*/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
    
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

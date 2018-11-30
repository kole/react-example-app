import "babel-polyfill";

import React from 'react';
import thunk from 'redux-thunk';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk))

const GlobalStyle = createGlobalStyle`
    @import url('https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css');
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');
    @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
    html, body {
        background-color: #fff;
        display: flex;
        font-family: "Open Sans", sans-serif;
        min-height: 100vh;
        min-width: 100vw;
    }
    input {
        outline: none;
    }
    #app {
        align-items: center;
        display: flex;
        flex: 1;
    }
`;

import App from './components/App';

render(
    <Provider store={store}>
        <GlobalStyle />
        <App />
    </Provider>,
    document.getElementById('root')
);

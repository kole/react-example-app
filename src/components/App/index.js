import React from 'react';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import { createStore, applyMiddleware } from 'redux';

import Routes from '~/Routes';
import rootReducer from '~/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk))

const AppContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
`
export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppContainer>
                    <Routes />
                </AppContainer>
            </Provider>
        );
    }
}

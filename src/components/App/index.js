import React from 'react';
import { observer, Provider } from 'mobx-react';
import styled from 'styled-components';

import Routes from '~/Routes';
import RootStore from '~/stores/RootStore';
const store = new RootStore();

const AppContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
`

@observer
export default class App extends React.Component {
    render() {
        return (
            <Provider rootStore={store}>
                <AppContainer>
                    <Routes />
                </AppContainer>
            </Provider>
        );
    }
}

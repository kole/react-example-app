import React from 'react';
import styled from 'styled-components';

import Routes from '~/Routes';

const AppContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    height: 100%;
`
export default class App extends React.Component {
    render() {
        return (
            <AppContainer>
                <Routes />
            </AppContainer>
        );
    }
}

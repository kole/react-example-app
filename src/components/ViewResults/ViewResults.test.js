/* eslint-env jest */

import React from 'react';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
import { createStore, applyMiddleware } from 'redux';

import ViewResults from './index.js';
import rootReducer from '~/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

const mocks = {
    history: {push: () => {}}
};

describe('ViewResults', () => {
    test('Snapshot', () => {
        const component = renderer
            .create(<ViewResults history={mocks.history} store={store} />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
});

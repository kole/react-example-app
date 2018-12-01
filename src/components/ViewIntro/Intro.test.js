/* eslint-env jest */

import React from 'react';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
import { createStore, applyMiddleware } from 'redux';

import ViewIntro from './index.js';
import rootReducer from '~/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

const mock = { history: {}};

describe('ViewIntro', () => {
    test('Snapshot', () => {
        const component = renderer
            .create(<ViewIntro history={mock.history} store={store} />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
});

/* eslint-env jest */

import React from 'react';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '~/reducers';
import ViewQuestions from './index.js';

const store = createStore(rootReducer, applyMiddleware(thunk));
const mocks = { match: {params: {num: 1}}, history: {push: () => {}}};

describe('ViewQuestions', () => {
    test('Snapshot', () => {
        const component = renderer
            .create(<ViewQuestions history={mocks.history} match={mocks.match} store={store} />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
});

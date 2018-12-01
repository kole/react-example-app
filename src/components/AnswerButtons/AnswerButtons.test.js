/* eslint-env jest */
import React from 'react';
import thunk from 'redux-thunk';
import renderer from 'react-test-renderer';
import { createStore, applyMiddleware } from 'redux';

import rootReducer from '~/reducers';
import AnswerButtons from './index.js';

const store = createStore(rootReducer, applyMiddleware(thunk));

const mocks = {
    rootStore: {},
    questionID: 1,
    history: {}
};

describe('AnswerButtons', () => {
    test('Snapshot', () => {
        const component = renderer
            .create(<AnswerButtons history={mocks.history} questionID={mocks.questionID} store={store} />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
});

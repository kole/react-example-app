/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import AnswerButtons from './index.js';

const mocks = {
    rootStore: {},
    questionID: 1,
    history: {}
};

describe('AnswerButtons', () => {
    test('Snapshot', () => {
        const component = renderer
            .create(<AnswerButtons history={mocks.history} questionID={mocks.questionID} rootStore={mocks.rootStore} />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
});

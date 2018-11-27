/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import QuizProgress from './index.js';

describe('QuizProgress', () => {
    test('Snapshot', () => {
        const component = renderer
            .create(<QuizProgress currentQuestion={3} totalQuestions={10} />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
});

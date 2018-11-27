/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import ResultsList from './index.js';

const mocks = {
    answers: [{id: 1, answer: true}, {id: 1, answer: true}],
    questions: [
        {
            question: "Sample correct question for test",
            correct_answer: "True"
        },
        {
            question: "Sample incorrect question for test",
            correct_answer: "False"
        }
    ]
};

describe('ResultsList', () => {
    test('Snapshot for correct answer', () => {
        const component = renderer
            .create(
                <ResultsList
                    answers={mocks.answers}
                    questions={mocks.questions}
                />
            )
            .toJSON();
        expect(component).toMatchSnapshot();
    });
});

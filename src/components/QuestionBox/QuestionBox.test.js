/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import QuestionBox from './index.js';

describe('QuestionBox', () => {
    test('Snapshot', () => {
        const component = renderer
            .create(<QuestionBox questionText="Test question box" />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
});

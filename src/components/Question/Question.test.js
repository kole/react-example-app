/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import Question from './index.js';

describe('Question', () => {
    test('Snapshot', () => {
        const component = renderer
            .create(<Question questionText="Test question" />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
});

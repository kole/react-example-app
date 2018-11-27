/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import VisualResult from './index.js';

describe('VisualResult', () => {
    test('Snapshot with right answer', () => {
        const component = renderer
            .create(<VisualResult correctAnswer="True" givenAnswer={true} />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });

    test('Snapshot with wrong answer', () => {
        const component = renderer
            .create(<VisualResult correctAnswer="True" givenAnswer={false} />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
});

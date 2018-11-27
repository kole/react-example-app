/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import YourScore from './index.js';

describe('YourScore', () => {
    test('Snapshot', () => {
        const component = renderer
            .create(<YourScore correctAnswerCount={5} totalQuestions={10} />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
});

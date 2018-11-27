/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import H1 from './index.js';

describe('H1', () => {
    test('Snapshot', () => {
        const component = renderer
            .create(<H1 text="H1 Component Test" />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
});

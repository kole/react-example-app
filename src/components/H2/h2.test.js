/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import H2 from './index.js';

describe('H2', () => {
    test('Snapshot', () => {
        const component = renderer
            .create(<H2 text="H2 Component Test" />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
});

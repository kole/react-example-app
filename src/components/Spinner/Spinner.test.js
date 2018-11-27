/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import Spinner from './index.js';

describe('Spinner', () => {
    test('Snapshot', () => {
        const component = renderer
            .create(<Spinner />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
});

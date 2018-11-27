/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import Category from './index.js';

describe('Category', () => {
    test('Snapshot', () => {
        const component = renderer
            .create(<Category categoryText="Test category" />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
});

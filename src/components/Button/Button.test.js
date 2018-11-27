/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import Button from './index.js';

describe('Button', () => {
    test('Snapshot', () => {
        const component = renderer
            .create(
                <Button
                    buttonColor="red"
                    clickHandler={() => {}}
                    text="Test Button text"
                    textColor="#fff"
                />
            )
            .toJSON();
        expect(component).toMatchSnapshot();
    });
});

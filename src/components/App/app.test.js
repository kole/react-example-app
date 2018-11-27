/* eslint-env jest */

import React from 'react';
import Shallow from 'react-test-renderer/shallow';
import App from './index.js';

describe('App', () => {
    test('Snapshot', () => {
        const renderer = new Shallow();
        renderer.render(<App />);
        const result = renderer.getRenderOutput();
        expect(result).toMatchSnapshot();
    });
});

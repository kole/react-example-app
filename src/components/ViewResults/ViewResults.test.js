/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import ViewResults from './index.js';
import RootStore from '~/stores/RootStore';
const store = new RootStore();

const mocks = {
    history: {push: () => {}}
};

describe('ViewResults', () => {
    test('Snapshot', () => {
        const component = renderer
            .create(<ViewResults history={mocks.history} rootStore={store} />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
});

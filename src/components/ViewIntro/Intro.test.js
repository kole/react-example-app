/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import ViewIntro from './index.js';

import RootStore from '~/stores/RootStore';
const store = new RootStore();

const mock = { history: {}};

describe('ViewIntro', () => {
    test('Snapshot', () => {
        const component = renderer
            .create(<ViewIntro history={mock.history} rootStore={store} />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
});

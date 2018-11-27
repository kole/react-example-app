/* eslint-env jest */

import React from 'react';
import renderer from 'react-test-renderer';
import ViewQuestions from './index.js';
import RootStore from '~/stores/RootStore';
const store = new RootStore();

const mocks = { match: {params: {num: 1}}, history: {push: () => {}}};

describe('ViewQuestions', () => {
    test('Snapshot', () => {
        const component = renderer
            .create(<ViewQuestions history={mocks.history} match={mocks.match} rootStore={store} />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });
});

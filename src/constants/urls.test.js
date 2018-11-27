/* eslint-env jest */
import urls from './urls';

describe('URLs', () => {
    test('Constant is expected string', () => {
        expect(urls.questionsAPI).toEqual('https://opentdb.com/api.php');
    });
});

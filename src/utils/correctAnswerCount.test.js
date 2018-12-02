/* eslint-env jest */
import correctAnswerCount from './correctAnswerCount';

const correctAnswers = ['True', 'False', 'True', 'False', 'True', 'False', 'True', 'False', 'True', 'False'];
let userAnswers = [true, false, true, false, true, false, true, false, true, false];

describe('Correct answer count returns expected result', () => {
    test('10 out of 10 correct answers returns a results count of 10', () => {
        const count = correctAnswerCount(correctAnswers, userAnswers);
        expect(count).toBe(10);
    });

    test('7 out of 10 correct answers returns a result of 7', () => {
        userAnswers = [true, false, true, false, true, false, true, true, false, true];
        const count = correctAnswerCount(correctAnswers, userAnswers);
        expect(count).toBe(7);
    });

    test('0 out of 10 correct answers returns a result of 0', () => {
        userAnswers = [false, true, false, true, false, true, false, true, false, true];
        const count = correctAnswerCount(correctAnswers, userAnswers);
        expect(count).toBe(0);
    });
})

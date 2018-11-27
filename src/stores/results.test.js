/* eslint-env jest */
import RootStore from '~/stores/RootStore';

const mocks = {
    questions: [
        {question: 'Question 1', correct_answer: "True"},
        {question: 'Question 2', correct_answer: "True"},
        {question: 'Question 3', correct_answer: "True"},
        {question: 'Question 4', correct_answer: "True"},
        {question: 'Question 5', correct_answer: "True"},
    ],
    answers: [
        {id: 1, answer: true},
        {id: 2, answer: false},
        {id: 3, answer: true},
        {id: 4, answer: true},
        {id: 5, answer: false}
    ]
};

describe("Results Store", () => {
    it('returns the expected number of correct answers', () => {
        const store = new RootStore();
        store.QuestionsStore.setQuestions(mocks.questions);
        mocks.answers.forEach(answer => store.AnswersStore.recordAnswer(answer));
        expect(store.QuestionsStore.questions.length).toEqual(5);
        expect(store.AnswersStore.answers.length).toEqual(5);
        expect(store.ResultsStore.correctAnswerCount).toEqual(3);
    });
});

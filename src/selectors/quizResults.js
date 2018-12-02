import { createSelector } from 'reselect';

import correctAnswerCount from '~/utils/correctAnswerCount';

const getCorrectAnswers = (state) => {
    return state.questions.questions.map(q => q.correct_answer);
};

const getUserAnswers = (state) => {
    return state.answers.answers.map(a => a.answer);
};

const calculateResults = createSelector(
    [getCorrectAnswers, getUserAnswers],
    (correctAnswers, userAnswers) => correctAnswerCount(correctAnswers, userAnswers)
);

export default calculateResults;

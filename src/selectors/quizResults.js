import { createSelector } from 'reselect';

const getCorrectAnswers = (state) => {
    return state.questions.questions.map(q => q.correct_answer);
};

const getUserAnswers = (state) => {
    return state.answers.answers.map(a => a.answer);
};

const calculateResults = createSelector(
    [getCorrectAnswers, getUserAnswers],
    (correctAnswers, userAnswers) => {
        let count = 0;
        correctAnswers.map((answer, idx) => {
            // normalize answers since there are strings and bools
            const correctAnswer = answer.toString().toLowerCase();
            const givenAnswer = userAnswers[idx].toString().toLowerCase();
            if(correctAnswer === givenAnswer) count++
        })
        return count;
    }
);

export default calculateResults;

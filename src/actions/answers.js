export const RECORD_ANSWER = 'RECORD_ANSWER';
export const RESET_ANSWERS = 'RESET_ANSWERS';

export const recordAnswer = ({ id, answer }) => ({
    type: RECORD_ANSWER,
    payload: { id, answer }
});

export const resetAnswers = () => ({
    type: RESET_ANSWERS
});

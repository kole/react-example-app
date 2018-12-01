export const RECORD_ANSWER = 'RECORD_ANSWER';

export const recordAnswer = ({ id, answer }) => ({
    type: RECORD_ANSWER,
    payload: { id, answer }
});

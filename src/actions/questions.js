import URL from '~/constants/urls';

export const FETCH_QUESTIONS_BEGIN   = 'FETCH_QUESTIONS_BEGIN';
export const FETCH_QUESTIONS_SUCCESS = 'FETCH_QUESTIONS_SUCCESS';
export const FETCH_QUESTIONS_ERROR = 'FETCH_QUESTIONS_ERROR';

export const fetchQuestionsBegin = () => ({
    type: FETCH_QUESTIONS_BEGIN
});

export const fetchQuestionsSuccess = questions => ({
    type: FETCH_QUESTIONS_SUCCESS,
    payload: { questions }
});

export const fetchQuestionsError = error => ({
    type: FETCH_QUESTIONS_ERROR,
    payload: { error }
});

export function fetchQuestions(amount=10, difficulty='hard', type='boolean') {
    const url = encodeURI(`${URL.questionsAPI}?amount=${amount}&difficulty=${difficulty}&type=${type}`);

    return dispatch => {
        dispatch(fetchQuestionsBegin());
        return fetch(url)
            .then(res => res.json())
            .then(data => {
                const { results } = data;
                dispatch(fetchQuestionsSuccess(results));
                return results;
            })
            .catch(error => dispatch(fetchQuestionsError(error)));
    };
}

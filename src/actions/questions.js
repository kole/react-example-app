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

export function fetchQuestions() {
    return dispatch => {
        dispatch(fetchQuestionsBegin());
        return fetch(URL)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchQuestionsSuccess(json.questions));
                return json.questions;
            })
            .catch(error => dispatch(fetchQuestionsError(error)));
    };
}

// Necessary error handler because fetch doesn't fail nicely with HTTP errors
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

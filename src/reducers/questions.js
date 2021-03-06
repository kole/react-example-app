import {
    FETCH_QUESTIONS_BEGIN,
    FETCH_QUESTIONS_SUCCESS,
    FETCH_QUESTIONS_ERROR
  } from '../actions/questions';

  const initialState = {
    questions: [],
    fetching: false,
    error: null
  };

  export default function questionsReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_QUESTIONS_BEGIN:
        return {
          ...state,
          fetching: true,
          error: null
        };

      case FETCH_QUESTIONS_SUCCESS:
        return {
          ...state,
          fetching: false,
          questions: action.payload.questions
        };

      case FETCH_QUESTIONS_ERROR:
        return {
          ...state,
          fetching: false,
          error: action.payload.error,
          questions: []
        };

      default:
        return state;
    }
  }

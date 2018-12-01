import {
    RECORD_ANSWER,
    RESET_ANSWERS
  } from '../actions/answers';

  const initialState = {
    answers: [],
  };

  export default function answersReducer(state = initialState, action) {
    switch(action.type) {
      case RECORD_ANSWER:
        return {
            ...state,
            answers: [...state.answers, action.payload]
        };

      case RESET_ANSWERS:
        return {
            ...state,
            answers: initialState.answers
        }

      default:
        return state;
    }
  }

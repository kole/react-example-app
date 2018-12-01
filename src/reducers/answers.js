import {
    RECORD_ANSWER
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

      default:
        return state;
    }
  }

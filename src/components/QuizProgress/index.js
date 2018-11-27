import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const QuizProgressContainer = styled.div`
    font-size: 1.3em;
    font-weight: bold;
    padding: 2em 0;
`;

const QuizProgress = (props) => {
    const { currentQuestion, totalQuestions } = props;

    return (
        <QuizProgressContainer>{currentQuestion} of {totalQuestions}</QuizProgressContainer>
    );
}

QuizProgress.propTypes = {
    currentQuestion: PropTypes.any.isRequired,
    totalQuestions: PropTypes.any.isRequired
}

export default QuizProgress;

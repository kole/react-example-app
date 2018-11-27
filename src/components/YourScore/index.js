import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const YourScoreContainer = styled.div`
    font-size: 3em;
    font-weight: bold;
`;

const YourScore = (props) => {
    const { correctAnswerCount, totalQuestions } = props;
    return (
        <YourScoreContainer>
            You scored <br />{correctAnswerCount} / {totalQuestions}
        </YourScoreContainer>
    );
}

YourScore.propTypes = {
    correctAnswerCount: PropTypes.number.isRequired,
    totalQuestions: PropTypes.number.isRequired
}

export default YourScore;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Visual = styled.div`
    display: flex;
    justify-content: flex-start;

    i.right {
        color: green
    }
    i.wrong {
        color: red
    }
`;

const VisualResult = (props) => {
    let { correctAnswer, givenAnswer } = props;
    correctAnswer = correctAnswer.toLowerCase();
    givenAnswer = givenAnswer.toString().toLowerCase();

    return (
        <Visual>
            { correctAnswer === givenAnswer ?
                <i className="material-icons right">check</i> :
                <i className="material-icons wrong">close</i>
            }
        </Visual>
    );
}

VisualResult.propTypes = {
    correctAnswer: PropTypes.string.isRequired,
    givenAnswer: PropTypes.bool.isRequired
}

export default VisualResult;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Question from '~/components/Question';

const QuestionBox = styled.div`
    align-items: center;
    border: 1px solid #000;
    display: flex;
    font-size: 2em;
    line-height: 1.8em;
    padding: 2em;
`;

const QuestionComponent = (props) => {
    const { questionText } = props;
    return (
        <QuestionBox>
            <Question questionText={questionText} />
        </QuestionBox>
    );
}

QuestionComponent.propTypes = {
    questionText: PropTypes.string.isRequired
}

export default QuestionComponent;

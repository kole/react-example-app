import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

const Question = styled.div`
    line-height: 1.3em;
`;

const QuestionComponent = (props) => {
    const { questionText } = props;

    // Lets clean the encoded HTML before we unsafely pass it to the DOM
    const cleanHTML = DOMPurify.sanitize(questionText);

    return <Question dangerouslySetInnerHTML={{__html: cleanHTML}}></Question>;
}

QuestionComponent.propTypes = {
    questionText: PropTypes.string.isRequired
}

export default QuestionComponent;

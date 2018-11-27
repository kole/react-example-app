import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Question from '~/components/Question';
import VisualResult from '~/components/VisualResult';

const Results = styled.div`
    > ul li {
        align-items: center;
        border-bottom: 1px solid #ccc;
        display: flex;
        font-size: 1.2em;
        justify-content: flex-start;
        padding: 10px 0;
        text-align: left;

        i {
            padding-right: 20px;
        }
    }
`;

const ResultsListComponent = (props) => {
    const { questions, answers } = props;

    return (
        <Results>
            <ul>
                {
                    questions.map((questionObj, i) => {
                        const givenAnswer = answers[i].answer;
                        return (
                            <li key={`${i}-question`}>
                                <VisualResult
                                    correctAnswer={questionObj.correct_answer}
                                    givenAnswer={givenAnswer}
                                />
                                <Question questionText={questionObj.question} />
                            </li>
                        );
                    })
                }
            </ul>
        </Results>
    );
};

ResultsListComponent.propTypes = {
    questions: PropTypes.any.isRequired,
    answers: PropTypes.any.isRequired
};

export default ResultsListComponent;

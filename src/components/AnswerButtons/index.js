import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Button from '~/components/Button';

const AnswerButtonsContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-width: 100%;

    > * {
        display: flex;
        margin: 0 20px;
    }
`;

export default class Buttons extends React.Component {
    navigateToNextQuestion() {
        const { history, questionID: currentPageNumber } = this.props;
        const { rootStore: { QuestionsStore: { questions }}} = this.props;

        if (currentPageNumber >= questions.length) {
            return history.push('/results');
        }
        return history.push(`/question/${parseInt(currentPageNumber + 1, 10)}`);
    }

    recordAnswerOnClick(id, answer) {
        const { rootStore: { AnswersStore: { recordAnswer }}} = this.props;
        recordAnswer({ id, answer });
        this.navigateToNextQuestion();
    }

    render() {
        const { questionID: id } = this.props;
        return (
            <AnswerButtonsContainer>
                <Button clickHandler={() => this.recordAnswerOnClick(id, false)} text="False" />
                <Button clickHandler={() => this.recordAnswerOnClick(id, true)} text="True" />
            </AnswerButtonsContainer>
        );
    }
}

Buttons.propTypes = {
    rootStore: PropTypes.object,
    questionID: PropTypes.number.isRequired,
    history: PropTypes.object.isRequired
}

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '~/components/Button';
import { recordAnswer } from '~/actions/answers';

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

class Buttons extends React.Component {
    navigateToNextQuestion() {
        const { history, questionID: currentPageNumber, questions } = this.props;

        if (currentPageNumber >= questions.questions.length) {
            return history.push('/results');
        }
        return history.push(`/question/${parseInt(currentPageNumber + 1, 10)}`);
    }

    recordAnswerOnClick(id, answer) {
        const { dispatch } = this.props;
        dispatch(recordAnswer({ id, answer }));
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
    dispatch: PropTypes.func.isRequired,
    questionID: PropTypes.number.isRequired,
    history: PropTypes.object.isRequired,
    questions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    answers: state.answers,
    questions: state.questions
});

export default connect(mapStateToProps)(Buttons)

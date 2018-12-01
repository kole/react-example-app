import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '~/components/Button';
import YourScore from '~/components/YourScore';
import { resetAnswers } from '~/actions/answers';
import ResultsList from '~/components/ResultsList';
import calculateResults from '~/selectors/quizResults';

const ResultsView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100%;
    padding: 4em;
    text-align: center;

    > * {
        flex: 1;
        flex-direction: column;
        justify-content: center;
    }
`;

class Results extends React.Component {
    componentDidMount() {
        const { questions, answers, history, dispatch} = this.props;
        if (questions.length === 0 || questions.length !== answers.length) {
            dispatch(resetAnswers())
            return history.push('/');
        }
    }

    playAgain() {
        const { history, dispatch } = this.props;
        dispatch(resetAnswers(), dispatch)
        return history.push('/');
    }

    render() {
        const { questions, answers, correctAnswers } = this.props;

        return (
            <ResultsView>
                <YourScore correctAnswerCount={correctAnswers} totalQuestions={questions.length} />
                <ResultsList answers={answers} questions={questions} />
                <Button clickHandler={this.playAgain.bind(this)} text="Play Again?" />
            </ResultsView>
        );
    }
}

Results.propTypes = {
    dispatch: PropTypes.func.isRequired,
    questions: PropTypes.array.isRequired,
    answers: PropTypes.array.isRequired,
    correctAnswers: PropTypes.number.isRequired,
    history: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    questions: state.questions.questions,
    answers: state.answers.answers,
    correctAnswers: calculateResults(state)
});

export default connect(mapStateToProps)(Results)

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import YourScore from '~/components/YourScore';
import Button from '~/components/Button';
import ResultsList from '~/components/ResultsList';

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

@inject('rootStore')
@observer
export default class Results extends React.Component {
    componentDidMount() {
        const { rootStore: { QuestionsStore: { questions }, AnswersStore: { answers }}, history} = this.props;
        if (questions.length === 0 || questions.length !== answers.length) {
            return history.push('/');
        }
    }

    playAgain() {
        const { history } = this.props;
        return history.push('/');
    }

    render() {
        const {
            rootStore: {
                QuestionsStore: { questions },
                AnswersStore: { answers },
                ResultsStore: { correctAnswerCount }
            }
        } = this.props;

        return (
            <ResultsView>
                <YourScore correctAnswerCount={correctAnswerCount} totalQuestions={questions.length} />
                <ResultsList answers={answers} questions={questions} />
                <Button clickHandler={this.playAgain.bind(this)} text="Play Again?" />
            </ResultsView>
        );
    }
}

Results.propTypes = {
    rootStore: PropTypes.object,
    history: PropTypes.object.isRequired
}

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { inject, observer } from 'mobx-react';

import Category from '~/components/Category';
import QuestionBox from '~/components/QuestionBox';
import QuizProgress from '~/components/QuizProgress';
import AnswerButtons from '~/components/AnswerButtons';
import Spinner from '~/components/Spinner';

const QuestionsView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    padding: 4em;
    text-align: center;

    > * {
        flex: 1;
        justify-content: center;
    }
`;

@inject('rootStore')
@observer
export default class Questions extends React.Component {
    componentDidMount() {
        const { rootStore: { QuestionsStore: { fetching, questions }}, history } = this.props;

        // If we are not fetching and we also don't have questions in the array,
        // send user back to Intro screen - there is a problem
        if (!fetching && questions.length === 0) {
            return history.push('/');
        }
    }

    getCurrentQuestionByNumber(num) {
        if (typeof num !== 'number') return;
        const { rootStore: { QuestionsStore: { questions, getQuestionAtIndex }}} = this.props;
        const idx = num - 1;
        if (questions.length === 0 || questions.length === idx) return;
        return getQuestionAtIndex(idx);
    }

    render() {
        const { rootStore: { QuestionsStore: { fetching, questions }}, match, history} = this.props;
        const currentPageNumber = parseInt(match.params.num, 10);
        const question = this.getCurrentQuestionByNumber(currentPageNumber);

        if (fetching || !question) return <Spinner />;

        return (
            <QuestionsView>
                <Category categoryText={question.category} />
                <QuestionBox questionText={question.question} />
                <QuizProgress currentQuestion={currentPageNumber} totalQuestions={questions.length} />
                <AnswerButtons history={history} questionID={currentPageNumber} />
            </QuestionsView>
        );
    }
}

Questions.propTypes = {
    rootStore: PropTypes.object,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
}

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Spinner from '~/components/Spinner';
import Category from '~/components/Category';
import QuestionBox from '~/components/QuestionBox';
import QuizProgress from '~/components/QuizProgress';
import AnswerButtons from '~/components/AnswerButtons';

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

class Questions extends React.Component {
    componentDidMount() {
        const { fetching, questions, history } = this.props;

        // If we are not fetching and we also don't have questions in the array,
        // send user back to Intro screen - there is a problem
        if (!fetching && questions.length === 0) {
            return history.push('/');
        }
    }

    getCurrentQuestionByNumber(num) {
        if (typeof num !== 'number') return;
        const { questions } = this.props;
        const idx = num - 1;
        if (questions.length === 0 || questions.length === idx) return;
        return questions[idx];
    }

    render() {
        const { fetching, questions, match, history} = this.props;
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
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    questions: PropTypes.array,
    fetching: PropTypes.bool,
    error: PropTypes.object
}

const mapStateToProps = state => ({
    questions: state.questions.questions,
    fetching: state.questions.fetching,
    error: state.questions.error
});

export default connect(mapStateToProps)(Questions);

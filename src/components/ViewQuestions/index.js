import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Spinner from '~/components/Spinner';
import Category from '~/components/Category';
import QuestionBox from '~/components/QuestionBox';
import QuizProgress from '~/components/QuizProgress';
import AnswerButtons from '~/components/AnswerButtons';

import { fetchQuestions } from '~/actions/questions';

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
        const { loading, questions, dispatch } = this.props;
        dispatch(fetchQuestions());

        // If we are not fetching and we also don't have questions in the array,
        // send user back to Intro screen - there is a problem
        if (!loading && questions.length === 0) {
            return history.push('/');
        }
    }

    getCurrentQuestionByNumber(num) {
        if (typeof num !== 'number') return;
        // const { rootStore: { QuestionsStore: { questions, getQuestionAtIndex }}} = this.props;
        // const idx = num - 1;
        // if (questions.length === 0 || questions.length === idx) return;
        // return getQuestionAtIndex(idx);
        return 1;
    }

    render() {
        const { loading, questions, match, history} = this.props;
        const currentPageNumber = parseInt(match.params.num, 10);
        const question = this.getCurrentQuestionByNumber(currentPageNumber);

        if (loading || !question) return <Spinner />;

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
    dispatch: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    questions: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.object
}

const mapStateToProps = state => ({
    questions: state.questions.items,
    loading: state.questions.loading,
    error: state.questions.error
});

export default connect(mapStateToProps)(Questions);

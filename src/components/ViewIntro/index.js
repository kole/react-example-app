import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import styled from "styled-components";

import H1 from "~/components/H1";
import H2 from "~/components/H2";
import Button from "~/components/Button";
import { fetchQuestions } from '~/actions/questions';

const IntroContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    padding: 4em;
    text-align: center;

    > * {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: center;
    }
`;

class Intro extends React.Component {
    handleClick() {
        const { history, dispatch } = this.props;

        // User has requested to begin quiz, get questions
        dispatch(fetchQuestions());

        // go to the first question URL
        history.push("/question/1");
    }

    render() {
        return (
            <IntroContainer>
                <H1 text="Welcome to the Trivia Challenge" />
                <H2 text="You will be presented with 10 True or False questions." />
                <H2 text="Can you score 100%?" />
                <Button
                    clickHandler={this.handleClick.bind(this)}
                    text="Begin"
                />
            </IntroContainer>
        );
    }
}

Intro.propTypes = {
    dispatch: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    questions: state.questions.items,
    fetching: state.questions.fetching,
    error: state.questions.error
});

export default connect(mapStateToProps)(Intro);

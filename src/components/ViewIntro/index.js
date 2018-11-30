import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import H1 from "~/components/H1";
import H2 from "~/components/H2";
import Button from "~/components/Button";

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

export default class Intro extends React.Component {
    handleClick() {
        const {
            history,
            rootStore: { QuestionsStore }
        } = this.props;

        // User has requested to begin quiz, get questions
        QuestionsStore.getNewQuestions();

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
    rootStore: PropTypes.object,
    history: PropTypes.object.isRequired
};

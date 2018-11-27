import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from 'color';

const ButtonContainer = styled.div`
    button {
        background: ${props => props.buttonColor};
        border: 1px solid #777;
        color: ${props => props.textColor};
        cursor: pointer;
        font-size: 1.2em;
        outline: none;
        padding: 1.1em 1.4em;
        text-transform: uppercase;

        :hover {
            background: ${props => Color(props.buttonColor).lighten(0.5).string()};
        }
    }
`;

const Button = (props) => {
    const { text, clickHandler, buttonColor, textColor } = props;
    return (
        <ButtonContainer buttonColor={buttonColor} textColor={textColor}>
            <button onClick={clickHandler}>{text}</button>
        </ButtonContainer>
    )
};

Button.propTypes = {
    clickHandler: PropTypes.func,
    text: PropTypes.string.isRequired,
    textColor: PropTypes.string,
    buttonColor: PropTypes.string
};

Button.defaultProps = {
    buttonColor: '#004b79',
    textColor: '#fff'
}

export default Button;

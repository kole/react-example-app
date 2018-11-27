import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H2 = styled.div`
    font-size: 2em;
    line-height: 1.3em;
`;

const H2Component = (props) => {
    const { text } = props;
    return <H2>{text}</H2>
};

H2Component.propTypes = {
    text: PropTypes.string.isRequired
};

export default H2Component;

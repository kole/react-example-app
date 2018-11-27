import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const H1 = styled.div`
    font-size: 3em;
    font-weight: bold;
    line-height: 1.3em;
`;

const H1Component = (props) => {
    const { text } = props;
    return <H1>{text}</H1>
};

H1Component.propTypes = {
    text: PropTypes.string.isRequired
};

export default H1Component;

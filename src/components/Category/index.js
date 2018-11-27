import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DOMPurify from 'dompurify';

const Category = styled.div`
    font-size: 1.4em;
    font-weight: bold;
`;

const CategoryComponent = (props) => {
    const { categoryText } = props;

    // Lets clean the encoded HTML before we unsafely pass it to the DOM
    const cleanHTML = DOMPurify.sanitize(categoryText);

    return <Category dangerouslySetInnerHTML={{__html: cleanHTML}}></Category>;
}

CategoryComponent.propTypes = {
    categoryText: PropTypes.string.isRequired
}

export default CategoryComponent;

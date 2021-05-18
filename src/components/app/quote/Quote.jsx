import React from 'react'
import PropTypes from 'prop-types'

const Quote = ({text, character, img}) => (
    <figure>
        <img src={img} alt={character} />
        <figcaption>{text}</figcaption>
    </figure>
);

Quote.propTypes ={
    text: PropTypes.string.isRequired,
    character: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}

export default Quote;

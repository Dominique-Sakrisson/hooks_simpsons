import React from 'react'
import PropTypes from 'prop-types'

const Load = ({onClick}) => (
    <>
        <h1>Generate Simpson</h1>
        <button onClick={onClick}>Generate</button>
    </>
)

Load.propTypes= {
    onClick: PropTypes.func.isRequired
}

export default Load;

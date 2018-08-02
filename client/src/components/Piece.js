import React from 'react'

const Piece = (props) => {
    console.log(props)
    return(
        <li>{props.name}</li>
    )
}

export default Piece;
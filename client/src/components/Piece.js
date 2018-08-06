import React from 'react'

const Piece = (props) => {
    console.log(props)
    return(
        <li>
            {props.piece.name}
            <img src={props.piece.picture.url} />
        </li>
    )
}

export default Piece;
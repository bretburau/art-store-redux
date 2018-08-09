import React from 'react'
import {Link} from 'react-router-dom'

const Piece = (props) => {
    return(
        <li>
            <Link to={`/pieces/${props.piece.id}`}>{props.piece.name}</Link>
            <img src={props.piece.picture.url} height='150' />
        </li>
    )
}

export default Piece;
import React from 'react'
import Dropzone from 'react-dropzone';

const Piece = (props) => {
    console.log(props)
    return(
        <li>
            {props.piece.name}
        </li>
    )
}

export default Piece;
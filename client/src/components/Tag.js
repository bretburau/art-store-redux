import React from 'react'
import { Button } from 'reactstrap'

const Tag = (props) => {
    const showPieces = () => {
        
    }
    const piecesList = props.tag.pieces.map(piece => {
        return <li>{piece.name}</li>
    }) 
    return(
        <li>
            <Button onClick={showPieces}>{props.tag.name}</Button>
            <ul id={props.tag.id}>{piecesList}</ul>
        </li>
    )
}

export default Tag;
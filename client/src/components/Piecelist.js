import React from 'react';
import Piece from './Piece'

const PieceList = (props) => {
    const createList = () => {
        if(props.pieces){
            return props.pieces.map(piece => {
                return(
                    <ul><Piece piece={piece} key={piece.id} /></ul>
                )
            })
        } 
    }
    return(
        <div>{createList()}</div>
    )
}

export default PieceList;

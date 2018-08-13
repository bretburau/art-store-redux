import React from 'react';
import Piece from './Piece'

const PieceList = (props) => {
    const createList = () => {
        if(props.pieces){
            return props.pieces.map(piece => {
                return(
                    <Piece key={piece.id} piece={piece} />
                )
            })
        } 
    }
    return(
        <ul>{createList()}</ul>
    )
}

export default PieceList;

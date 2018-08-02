import React from 'react';
import Piece from './Piece'

const PieceList = (props) => {
    const createList = () => {
        if(props.pieces){
            return props.pieces.map(piece => {
                return(
                    <Piece piece={piece} key={piece.id} />
                )
            })
        } 
    }
    return(
        <div>{createList()}</div>
    )
}

export default PieceList;

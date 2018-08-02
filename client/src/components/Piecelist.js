import React from 'react';
import Piece from './Piece'

const PieceList = (props) => {
    const createList = () => {
        if(props.pieces){
            return props.pieces.map(piece => {
                console.log(piece)
                return(
                    <ul><Piece key={piece.id} piece={piece} /></ul>
                )
            })
        } 
    }
    return(
        <div>{createList()}</div>
    )
}

export default PieceList;

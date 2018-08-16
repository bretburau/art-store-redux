import React from 'react'
import { connect } from 'react-redux';

const PieceShow = ({piece}) => {
    console.log(piece)
    return(
        <div>
            <h3>{piece.name}</h3>
            <img src={piece.picture.url} alt={piece.name} width='200'/>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => { //TODO state empty if directly routed to page?
        
        const piece = state.pieces.pieces.find((p) => {
            return p.id === parseInt(ownProps.match.params.pieceId, 10)
        })
        console.log(piece)
        if(piece) {
            return { piece }
        } else {
            return {piece: {} 
        }
    }
}

export default connect(mapStateToProps)(PieceShow)
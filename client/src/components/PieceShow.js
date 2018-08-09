import React from 'react'
import { connect } from 'react-redux';

const PieceShow = ({piece}) => {
    return(
        <div>
            <img src={piece.picture.url} alt={piece.name} width='200'/>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => { //TODO state empty if directly routed to page?
        const piece = state.pieces.pieces.find((p) => {
            return p.id === parseInt(ownProps.match.params.pieceId)
        })
        if(piece) {
            return { piece }
        } else {
            return {piece: {} 
        }
    }
}

export default connect(mapStateToProps)(PieceShow)
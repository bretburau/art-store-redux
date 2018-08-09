import React from 'react'
import { connect } from 'react-redux';

const PieceShow = (props) => {
    return(
        <div>
        hello there
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    return {
        pieceId: ownProps.match.params.pieceId
    }
}

export default connect(mapStateToProps)(PieceShow)
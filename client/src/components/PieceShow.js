import React from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as tagActions from '../actions/tagActions';
import * as pieceActions from '../actions/pieceActions';

class PieceShow extends React.Component {
    componentWillMount() {
        if(Object.keys(this.props.piece).length === 0 ) {
            this.props.actions.fetchPieces()
        }
        debugger
    }

    render() {
        const piece = this.props.piece
        return(
            <div>
                <h3>{piece.name}</h3>
                <img src={piece.picture.url} alt={piece.name} width='200'/>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => { //TODO state empty if directly routed to page?
    
        const piece = state.pieces.pieces.find((p) => {
            return p.id === parseInt(ownProps.match.params.pieceId, 10)
        })
        if(piece) {
            return { piece }
        } else {
            return {piece: {} 
        }
    }
}

const mapDispatchToProps = dispatch => (    {
    actions: bindActionCreators(Object.assign({}, tagActions, pieceActions), dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(PieceShow)
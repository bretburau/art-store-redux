import React from 'react'
import { bindActionCreators } from 'redux';
import * as tagActions from '../actions/tagActions';
import * as pieceActions from '../actions/pieceActions';
import { connect } from 'react-redux'
import Tag from '../components/Tag'

class TagsList extends React.Component {
    componentDidMount() {
        this.props.actions.fetchTags()
    }

    render() {
        const tagList = this.props.tags.tags.map(tag => {
            return(<Tag tag={tag} key={tag.id} />)
        }) 
        return(
            <ul>{tagList}</ul>
        )
    }
}

const mapStateToProps = (state) =>({
    pieces: state.pieces,
    tags: state.tags
})

const mapDispatchToProps = dispatch => (    {
    actions: bindActionCreators(Object.assign({}, tagActions, pieceActions), dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(TagsList)
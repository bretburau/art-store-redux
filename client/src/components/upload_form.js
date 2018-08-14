import React from 'react'
import Dropzone from 'react-dropzone'
// import { ConnectedApp } from '../App';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from '../actions/tagActions';
import Checkbox from '../components/Checkbox'


class UploadForm extends React.Component {
    constructor() {
        super()

        this.state = {
            file: [],
            title: '',
            uploads: '',
            tags: []
        }
    }

    componentDidMount() {
        this.props.actions.fetchTags()
    }

    handleTextChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleDrop = (files) => {
        this.setState({
            file: files[0]
        })
    }

    readFile = (e) => {
        e.preventDefault();
        if(this.state.file) {
            let formPayload = new FormData();
            formPayload.append('uploaded_image', this.state.file);
            formPayload.append('name', this.state.title) //TODO best way to do this?
            this.sendImageToController(formPayload);
        }
    }

    sendImageToController = (formPayload) => {
        fetch(`/pieces/create`, {
            credentials: 'same-origin',
            headers: {},
            method: 'POST',
            body: formPayload
          })
          //todo error handling?
          .then(response => response.json())
          .then(imageFromController => {
        //   this.setState({uploads: this.state.uploads.concat(imageFromController)}) // <---NOT NECESSARY?
        })
        this.props.history.push('/') // re-routes to home page, TODO send to piece show page
    }

    render() {
        console.log('state:', this.state, 'props', this.props)
        const tagCheckboxList = this.props.tags.tags.map((tag, i) => { //TODO more weird nesting?!
            return <Checkbox tag={tag} key={i} />
        })
        return(
            <div>
                <form onSubmit={this.readFile.bind(this)}>
                    <h3>Upload a new image</h3>
                    Title: <input type='text' name='title' value={this.state.title} onChange={this.handleTextChange} />
                    <input type='submit' />
                </form>
                {tagCheckboxList}
                <Dropzone onDrop={this.handleDrop.bind(this)}>
                    <button>Upload a new image</button>
                </Dropzone>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    pieces: state.pieces,
    tags: state.tags
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
})


export default connect(mapStateToProps, mapDispatchToProps)(UploadForm)
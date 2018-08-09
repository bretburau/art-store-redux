import React from 'react'
import Dropzone from 'react-dropzone'

export default class UploadForm extends React.Component {
    constructor() {
        super()

        this.state = {
            file: [],
            title: '',
            uploads: ''
        }
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
            // this.state.file.title = this.state.title
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
        debugger;
        this.props.history.push('/') // re-routes to home page
    }

    render() {
        return(
                <div>
                    <form onSubmit={this.readFile.bind(this)}>
                        <h3>Upload a new image</h3>
                        Title: <input type='text' name='title' value={this.state.title} onChange={this.handleTextChange} />
                        <input type='submit' />
                    </form>
                    <Dropzone onDrop={this.handleDrop.bind(this)}>
                        <button>Upload a new image</button>
                    </Dropzone>
                </div>
        )
    }
}
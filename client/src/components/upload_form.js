import React from 'react'
import Dropzone from 'react-dropzone'

export default class UploadForm extends React.Component {
    constructor() {
        super()

        this.state = {
            uploads: '',
            files: [],
            title: ''
        }
    }

    handleTextChange = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleDrop = (files) => {
        console.log('hello?')
        this.setState({
            files
        })
        console.log('hi', this.state)
    }

    // readFile = (files) => {
    //     if(files && files[0]) {
    //         let formPayload = new FormData();
    //         formPayload.append('uploaded_image', files[0]);
    //         this.sendImageToController(formPayload);
    //     }
    // }

    // sendImageToController = (formPayload) => {
    //     fetch(`/pieces/new`, {
    //         credentials: 'same-origin',
    //         headers: {},
    //         method: 'POST',
    //         body: formPayload
    //       })
    //       //todo error handling?
    //       .then(response => response.json())
    //       .then(imageFromController => {
    //       this.setState({uploads: this.state.uploads.concat(imageFromController)})
    //     })
    //     console.log(this.state)
    // }

    render() {
        return(
                <div>
                    <h3>Upload a new image</h3>
                    Title: <input type='text' name='title' value={this.state.title} onChange={this.handleTextChange} />
                    <input type='submit' />
                    <Dropzone onDrop={this.handleDrop}>
                        <button>Upload a new image</button>
                    </Dropzone>
                </div>
        )
    }
}
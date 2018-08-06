import React from 'react'
import Dropzone from 'react-dropzone'

export default class UploadForm extends React.Component {
    constructor() {
        super()

        this.state = {
            uploads: ''
        }
    }

    readFile = (files) => {
        if(files && files[0]) {
            let formPayload = new FormData();
            formPayload.append('uploaded_image', files[0]);
            this.sendImageToController(formPayload);
        }
    }

    sendImageToController = (formPayload) => {
        fetch(`/pieces/new`, {
            credentials: 'same-origin',
            headers: {},
            method: 'POST',
            body: formPayload
          })
          //todo error handling?
          .then(response => response.json())
          .then(imageFromController => {
          this.setState({uploads: this.state.uploads.concat(imageFromController)})
        })
        console.log(this.state)
    }

    render() {
        return(
            <Dropzone onDrop={this.readFile}>
                <button>Upload a new image</button>
            </Dropzone>
        )
    }
}
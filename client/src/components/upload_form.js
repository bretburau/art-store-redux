import React from 'react'
import Dropzone from 'react-dropzone'

export default class UploadForm extends React.Component {

    readFile = (files) => {
        if(files && files[0]) {
            let formPayload = new FormData();
            formPayload.append('uploaded_image', files[0]);
            this.sendImageToController(formPayload);
        }
    }

    sendImageToController = (formPayload) => {

    }

    render() {
        return(
            <Dropzone onDrop={this.readFile}>
                <button>Upload a new image</button>
            </Dropzone>
        )
    }
}
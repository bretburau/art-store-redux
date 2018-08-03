import React from 'react'
import Dropzone from 'react-dropzone'

export default class UploadForm extends React.Component {

    render() {
        return(
            <Dropzone onDrop={this.readFile}>
                <button>Upload a new image</button>
            </Dropzone>
        )
    }
}
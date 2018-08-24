    import React from 'react'
    import Dropzone from 'react-dropzone'
    // import { ConnectedApp } from '../App';
    import { connect } from 'react-redux'
    import { bindActionCreators } from 'redux';
    import * as actions from '../actions/tagActions';
    import Checkbox from '../components/Checkbox'
    import TopNav from './TopNav';
    import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'


    class UploadForm extends React.Component {
        constructor() {
            super()

            this.state = {
                file: [],
                title: '',
                tags: [],
                upload: ''
            }
        }

        componentWillMount = () => {
            this.selectedCheckboxes = new Set();
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
            let tagIds = [];
            for (const checkbox of this.selectedCheckboxes) {
                tagIds.push(checkbox.id)
            }
            if(this.state.file) {
                let formPayload = new FormData();
                formPayload.append('uploaded_image', this.state.file);
                formPayload.append('name', this.state.title) //TODO best way to do this?
                formPayload.append('tagIds', tagIds)
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
                // this.setState({uploads: imageFromController}) 
                console.log(imageFromController)    
                this.props.history.push(`/pieces/${imageFromController.id}`)     
            })
            // console.log(this.state)
            // this.props.history.push('/') // re-routes to home page, TODO send to piece show page
        }

        toggleCheckbox = label => {
            if (this.selectedCheckboxes.has(label)) {
            this.selectedCheckboxes.delete(label);
            } else {
            this.selectedCheckboxes.add(label);
            }
            console.log(this.selectedCheckboxes)
        } 

        render() {
            const dropzoneStyle={
                margin: "0 auto"
            }
            const tagCheckboxList = this.props.tags.tags.map((tag, i) => { //TODO more weird nesting?!
                return <Checkbox
                tag={tag} 
                key={i}
                handleCheckboxChange={this.toggleCheckbox}
                />
            })
            return(
                <div>
                    <TopNav />
                    <Form onSubmit={this.readFile.bind(this)} className='text-center' >
                        {/* <form onSubmit={this.readFile.bind(this)}> */}
                        <br />
                            <h3>Upload a new image</h3>
                            Title: <input type='text' name='title' value={this.state.title} onChange={this.handleTextChange} />
                            {tagCheckboxList}
                            <input type='submit' />
                            
                        {/* </form> */}
                    </Form>
                    <div style={dropzoneStyle} >
                        <Dropzone onDrop={this.handleDrop.bind(this)}>
                            <p>Click or drag to upload an image!</p>
                        </Dropzone>
                    </div>
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
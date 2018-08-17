import React from 'react'
import Dropzone from 'react-dropzone'
// import { ConnectedApp } from '../App';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as actions from '../actions/tagActions';
import Checkbox from '../components/Checkbox'
import TopNav from './TopNav';


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
                <form onSubmit={this.readFile.bind(this)}>
                    <h3>Upload a new image</h3>
                    Title: <input type='text' name='title' value={this.state.title} onChange={this.handleTextChange} />
                    {tagCheckboxList}
                    <input type='submit' />
                </form>
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
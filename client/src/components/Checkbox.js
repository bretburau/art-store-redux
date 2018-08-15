import React from 'react'

export default class Checkbox extends React.Component {
    constructor() {
        super()

        this.state = {
            isChecked: false
        }
    }

    toggleCheckbox = () => {
        const {handleCheckboxChange} = this.props
        this.setState(({ isChecked }) => (
            {
              isChecked: !isChecked,
            }
        ));
        handleCheckboxChange(this.props.tag, this.state.isChecked)
    }

    render() {
        const tag = this.props.tag
        return(
            <div>
                <label>
                <input type='checkbox' value={tag.name} checked={this.state.isChecked} onChange={this.toggleCheckbox}  />
                {tag.name}
                </label>
                {this.props.isChecked}
            </div>
        )
    }
}
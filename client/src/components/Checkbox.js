import React from 'react'

export default class Checkbox extends React.Component {
    constructor() {
        super()

        this.state = {
            isChecked: false
        }
    }

    toggleCheckbox = () => {
        this.setState(({ isChecked }) => (
            {
              isChecked: !isChecked,
            }
        ));
        console.log(this.state.isChecked)  
    }

    render() {
        const tag = this.props.tag
        return(
            <div>
                <label>
                <input type='checkbox' value={tag.name} checked={this.isChecked} onChange={this.toggleCheckbox}  />
                {tag.name}
                </label>
            </div>
        )
    }
}
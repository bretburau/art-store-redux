import React from 'react'

export default class Checkbox extends React.Component {
    constructor() {
        super()

        this.state = {
            isChecked: false
        }
    }

    render() {
        return(
            <div>
                <input type='checkbox'  />
            </div>
        )
    }
}
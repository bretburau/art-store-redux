import React from 'react'

const Tag = (props) => {
    console.log(props)
    return(
        <div>{props.tag.name}</div>
    )
}

export default Tag;
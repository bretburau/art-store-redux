import React from 'react'
import Tag from '../components/Tag'

const TagList = (props) => {
    const tagList = props.tags.map(tag => {
        return <Tag tag={tag} key={tag.id} />
    }) 
    return (
        <div>{tagList}</div>
    )
}

export default TagList
import React from 'react'

function ContentImage({ url, caption }) {
    return (
        <figure className="content-image">
            <img src={url}  />
            <figcaption>{caption}</figcaption>
        </figure>
    )
}

export default ContentImage

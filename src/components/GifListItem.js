import React from 'react'

export const GifListItem = ({url, title}) => {


    return (
        <div className="card animate__animated animate__fadeIn" >
            <img src={url} alt={title} />
            <h3>{ title }</h3>
        </div>
    )
}

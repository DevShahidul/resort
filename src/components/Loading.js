import React from 'react'
import loadingGif from '../images/gif/loading-arrow.gif';

export const Loading = () => {
    return (
        <div className="loading">
            <h6>Rooms loading ...</h6>
            <img src={loadingGif} alt="Loading arrow" />
        </div>
    )
}

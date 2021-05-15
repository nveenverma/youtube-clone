import React from 'react'
import './_video.scss'

import {AiFillEye} from 'react-icons/ai'

const Video = () => {
    return (
        <div className="video">
            <div className="video__top">
                <img src='https://i.ytimg.com/vi/R_OERlafbmw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLBGQYM8yNmkykRdZWXGn_dx9usTOg' alt='' />
                <span>05:43</span>
            </div>
            <div className="video__title">
                Create an app in 5 minutes. This app is brought to you by Naveen
            </div>
            <div className="video__details">
                <span>
                    <AiFillEye /> 5m views • 
                </span>
                <span>
                     5 days ago
                </span>
            </div>
            <div className="video__channel">
                <img src='https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s68-c-k-c0x00ffffff-no-rj' alt='' />
                <p>Rainbow Hat Jr.</p>
            </div>
        </div>
    )
}

export default Video

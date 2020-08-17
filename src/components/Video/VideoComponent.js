import React from 'react';
import ReactPlayer from 'react-player';
import './Video.css';

const VideoComponent = (props) => {
    let url = 'https://www.youtube.com/watch?v=m1UwqzAUwSs';
    return(
        <div className="video-wrapper">
            <div className="video-container">
                <h2 aria-label="Video Sampler">Video Sampler</h2>
                <iframe src="https://www.youtube.com/embed/AH3Jj8JefFo" 
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    );
}

export default VideoComponent;
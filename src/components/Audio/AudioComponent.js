import React from 'react';
import './Audio.css';

const AudioComponent = (props) => {
    return(
        <div className="audio-wrapper">
            <div className="audio-container">
                <h2 aria-label="Audio Sampler">Audio Sampler</h2>
                <iframe width="100%" height="166" scrolling="no" frameborder="no"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/232328654&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
                >

                </iframe>
            </div>
        </div>
    );
}

export default AudioComponent;
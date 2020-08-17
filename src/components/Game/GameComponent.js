import React from 'react';
import './Game.css';

const GameComponent = () => {
    return(
        <div className="game-wrapper">
            <h2 aria-label="Pacman Game Widget">PACMAN Game Widget</h2>
            <iframe width="100%" height="500"
                src="https://pacman-e281c.firebaseapp.com/"
            ></iframe>
        </div>
    );
}

export default GameComponent;
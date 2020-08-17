import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './API.css';

const APIComponent = () => {
    const [data, setData] = useState({});
    const [species, setSpecies] = useState({});
    const [name, setName] = useState('');
    const [url, setUrl] = useState('');
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon/1')
            .then((res) => {
                console.log(res.data);
                console.log(res.data.species);
                setName(res.data.species.name);
                setUrl(res.data.species.url);
                setData({...data, ...res.data});
                setSpecies({...species, ...res.data.species})
            })
            .catch((err) => {
                console.log(err);
            });
    },[]);

    return(
        <div className="api-wrapper">
            <h2 aria-label="Pokemon API call requests">Pokemon API Call</h2>
            <p>Pokemon Name: {name}</p>
            <p>Url: {url}</p>
            {Object.keys(data).map((pokemon, index) => {
                return <li key={index}>{pokemon}</li>
                // if(pokemon === 'species') {
                //     return <li key={index}>{pokemon}</li>
                // }
                // else if(pokemon === 'ability') {
                //     return <li>{pokemon.name}</li>
                // }
                
            })}
            {Object.keys(species).map(function(key) {
                //return <li>{key}</li>
            })}
        </div>
    );
}

export default APIComponent;
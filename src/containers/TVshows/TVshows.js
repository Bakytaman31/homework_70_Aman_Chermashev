import React, {useEffect, useState} from 'react';
import axiosApp from "../../axios-app";
import {NavLink} from "react-router-dom";

const initialState = {
    data: []
};

const TVshows = () => {
    const [state, setState] = useState(initialState);

    const onChange = event => {
        getShows(event.target.value)
    };

    const getShows = async (name) => {
        const response = await axiosApp.get(`${name}`);
        setState({data: response.data});
    };

    useEffect(() => {
        getShows();
    }, [state.name]);
    return (
        <div>
            <input type="text" name="name" onChange={onChange} autoComplete='off'/>
            <ul>
                {
                    state.data && state.data.map(show => (
                        <li key={show.show.id}>
                    <NavLink
                        to={`/shows/${show.show.id}`}
                        id={show.show.id}
                        style={{color: 'black', textDecoration: 'none'}}
                    >{show.show.name}</NavLink></li>
                ))}
            </ul>
        </div>
    );
};

export default TVshows;
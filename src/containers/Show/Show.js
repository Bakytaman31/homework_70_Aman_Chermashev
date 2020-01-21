import React, {useEffect, useState} from 'react';
import axios from "axios";
import axiosApp from "../../axios-app";
import {NavLink} from "react-router-dom";

const initialState = {
    show: {},
    name: '',
    shows: []
};

const Show = props => {
    const [state, setState] = useState(initialState);

    const getShow = async () => {
        const response = await axios.get(`http://api.tvmaze.com/shows/${props.match.params.id}`);
        setState({show: response.data})
    };

    const onChange = event => {
        getShows(event.target.value);
    };

    const getShows = async () => {
        const response = await axiosApp.get(`${state.name}`);
        setState({shows: response.data});
    };

    const showDescription = () => {
        let text = state.show.summary;
        const newText = text.replace(/<p>|<\/p>|<b>|<\/b>|<i>|<\/i>/g, '' );
        return newText;
    };

    useEffect(() => {
        getShow();
        getShows();
    }, [props.match.params.id, state.name]);

    return (
        <div>
            <input type="text" onChange={onChange}/>
            <ul>
                {
                    state.shows && state.shows.map(show => (
                        <li key={show.show.id}>
                            <NavLink
                                to={`/shows/${show.show.id}`}
                                id={show.show.id}
                                style={{color: 'black', textDecoration: 'none'}}
                            >{show.show.name}</NavLink></li>
                    ))}
            </ul>
            {state.show &&
                <div>
                        <h1>{state.show.name}</h1>
                        <img src={state.show.image && state.show.image.medium} alt="#"/>
                        {state.show.summary && showDescription()}
                    </div>
            }
        </div>
    )
};

export default Show;
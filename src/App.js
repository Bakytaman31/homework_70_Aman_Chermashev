import React from 'react';
import './App.css';
import {Switch, Route} from "react-router-dom";
import TVshows from "./containers/TVshows/TVshows";
import Show from "./containers/Show/Show";

function App() {
  return (
        <Switch>
            <Route exact path="/" component={TVshows}/>
            <Route path="/shows/:id" component={Show}/>
        </Switch>
  );
}

export default App;

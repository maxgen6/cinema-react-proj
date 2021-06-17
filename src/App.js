import React, { useState } from "react";
import { Switch, Route, Redirect } from 'react-router-dom'

import { Context }  from "./context";
import {Header, Sidebar} from "./components/common";
import {Home, Watch} from "./pages";
import photo from "./img/hype-ru-1525010432-RkyRMrDIDLNgunw.jpeg";

function App() {

  const [cardInfo] = useState([
    {id: Date.now(), img: `${photo}`, title: 'Game of Thrones', genres: 'action, adventure, drama', score: '9.4/10'},
    {id: Date.now(), img: `${photo}`, title: 'Game of Thrones', genres: 'action, adventure, drama', score: '9.4/10'},
    {id: Date.now(), img: `${photo}`, title: 'Game of Thrones', genres: 'action, adventure, drama', score: '9.4/10'},
    {id: Date.now(), img: `${photo}`, title: 'Game of Thrones', genres: 'action, adventure, drama', score: '9.4/10'},
    {id: Date.now(), img: `${photo}`, title: 'Game of Thrones', genres: 'action, adventure, drama', score: '9.4/10'},
    {id: Date.now(), img: `${photo}`, title: 'Game of Thrones', genres: 'action, adventure, drama', score: '9.4/10'},
    {id: Date.now(), img: `${photo}`, title: 'Game of Thrones', genres: 'action, adventure, drama', score: '9.4/10'},
    {id: Date.now(), img: `${photo}`, title: 'Game of Thrones', genres: 'action, adventure, drama', score: '9.4/10'}
  ])
  const [movieId, setMovieId] = useState('the-dark-knight-2008')

  const getFilmId = id => setMovieId(id)

  return (
    <Context.Provider value={{
      cardInfo,
      movieId,
      getFilmId
    }}>
      <div className="wrapper">
        <div className="wrapper-content">
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path={`/${movieId}`} component={Watch}/>
            <Redirect to="/" />
          </Switch>
        </div>
        <div className="wrapper-sidebar">
          <Sidebar />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;

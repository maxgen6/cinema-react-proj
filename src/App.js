import React, {useEffect, useState} from "react";
import { Switch, Route } from 'react-router-dom'

import {get, getById} from "./services/api/movies";
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
  const [allMovies, setAllMovies] = useState(null)
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const res = await get()
      setAllMovies(res.data)
    }

    fetchData()
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const res = await getById('the-dark-knight-2008')
      setMovie(res.data)
    }

    fetchData()
  }, [])


  return (
    <Context.Provider value={{
      cardInfo,
      allMovies,
      movie
    }}>
      <div className="wrapper">
        <div className="wrapper-content">
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/watch" component={Watch}/>
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

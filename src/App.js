import React, { useState } from "react";
import { Switch, Route } from 'react-router-dom'

import { Context }  from "./context";
import {Header} from "./components/common";
import {Sidebar} from "./components/ui";
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

  return (
    <Context.Provider value={{
      cardInfo,
    }}>
      <div className="wrapper">
        <div className="wrapper-content">
          <Header />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/:slug" component={Watch}/>
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

import React,{ useState } from "react";

import { Context }  from "./context";
import {Header, Sidebar} from "./components/common";
import {Home} from "./components/pages";
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
    <Context.Provider value={cardInfo}>
      <div className="wrapper">
        <div className="wrapper-content">
          <Header />
          <Home />
        </div>
        <div className="wrapper-sidebar">
          <Sidebar />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;

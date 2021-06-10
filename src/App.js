import React,{ useState } from "react";

import Header from "./components/Common/Header/Header";
import Sidebar from "./components/Common/Sidebar/Sidebar";
import Content from "./components/Common/Content/Content";
import photo from "./img/hype-ru-1525010432-RkyRMrDIDLNgunw.jpeg";
import {Context} from "./context";

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
          <Content />
        </div>
        <div className="wrapper-sidebar">
          <Sidebar />
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;

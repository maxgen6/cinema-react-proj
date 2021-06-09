import React,{ useState } from "react";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import photo from "./img/hype-ru-1525010432-RkyRMrDIDLNgunw.jpeg";
import {Context} from "./context";

function App() {

  const [cardInfo] = useState([
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

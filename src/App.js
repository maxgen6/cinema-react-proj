import React, {useEffect} from "react";
import { Switch, Route } from 'react-router-dom'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import * as actions from './store/actions/getFromLS'
import {Header} from "./components/common";
import {Sidebar} from "./components/ui";
import {Home, Watch} from "./pages";


function App({ getFromLS, movieFromLS, setToLS, movie }) {


  useEffect(() => getFromLS(), [])
  useEffect(() => movie && setToLS(movie), [movie])

  console.log(movieFromLS)

  return (
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
  );
}


const mapStateToProps = (state) => ({
  movie: state.movie.movie,
  movieFromLS: state.setLS.movieFromLS
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    getFromLS: actions.getFromLS,
    setToLS: actions.setToLS
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)

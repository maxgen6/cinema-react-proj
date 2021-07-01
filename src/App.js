import React, {useEffect} from "react";
import { Switch, Route } from 'react-router-dom'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import movies from './store/actions/index'
import { Header } from "./components/common";
import { Sidebar } from "./components/ui";
import { Home, Watch } from "./pages";


function App({ getFromLS }) {

  useEffect(() => getFromLS(), [])

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
  movie: state.movies.movie,
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    getFromLS: movies.movies.getFromLS
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)

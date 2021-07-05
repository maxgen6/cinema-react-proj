import React, {useEffect} from "react";
import { Switch, Route } from 'react-router-dom'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


import actions from './store/actions/index'
import { Header } from "./components/common";
import { Sidebar } from "./components/ui";
import { Home, Watch, WatchLater } from "./pages";


function App({ getFromLS }) {

  useEffect(() => getFromLS(), [])

  return (
    <div className="wrapper">
      <div className="wrapper-content">
        <Header />
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/watch-later" component={WatchLater}/>
          <Route path="/:slug" component={Watch}/>
        </Switch>
      </div>
      <div className="wrapper-sidebar">
        <Sidebar />
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    getFromLS: actions.movies.getFromLS
  }, dispatch)

export default connect(null, mapDispatchToProps)(App)

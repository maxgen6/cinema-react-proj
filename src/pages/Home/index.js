import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import Home from "./Home";
import actions from '../../store/actions/index'

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  movieFromLS: state.movies.movieFromLS
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    fetchMovies: actions.movies.fetchMovies,
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
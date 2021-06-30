import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import Home from "./Home";
import * as actions from '../../store/actions/movies'

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  movieFromLS: state.setLS.movieFromLS
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    fetchMovies: actions.fetchMovies,
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
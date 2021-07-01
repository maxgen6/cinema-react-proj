import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Watch from "./Watch";
import movies from '../../store/actions/index'

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
  movieWatchLater: state.movies.movieWatchLater
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    fetchSpecialMovie: movies.movies.fetchSpecialMovie,
    setToLS: movies.movies.setToLS,
    setWatchLaterToLS: movies.movies.setWatchLaterToLS
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Watch)
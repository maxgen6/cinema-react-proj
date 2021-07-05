import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Watch from "./Watch";
import actions from '../../store/actions/index'

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
  movieWatchLater: state.movies.movieWatchLater
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    fetchSpecialMovie: actions.movies.fetchSpecialMovie,
    setToLS: actions.movies.setToLS,
    setWatchLaterToLS: actions.movies.setWatchLaterToLS
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Watch)
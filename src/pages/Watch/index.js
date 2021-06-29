import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Watch from "./Watch";
import * as actions from '../../store/actions/movie'

const mapStateToProps = (state) => ({
  movie: state.movie.movie
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    fetchSpecialMovie: actions.fetchSpecialMovie
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Watch)
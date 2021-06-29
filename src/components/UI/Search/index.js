import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Search from "./Search";
import * as actions from '../../../store/actions/searchMovie'

const mapStateToProps = (state) => ({
  searchMovies: state.movies.movies
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    searchSpecialMovie: actions.searchSpecialMovie
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search)
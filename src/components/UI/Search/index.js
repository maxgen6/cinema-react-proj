import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Search from "./Search";
import * as actions from '../../../store/actions/searchMovie'

const mapStateToProps = (state) => ({
  movies: state.movie.movie
})


const mapDispatchToProps = (dispatch) =>
  bindActionCreators({
    searchMovie: actions.searchMovie
  }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search)
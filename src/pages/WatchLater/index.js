import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import WatchLater from "./WatchLater";
import actions from '../../store/actions/index'

const mapStateToProps = state => ({
  movieWatchLater: state.movies.movieWatchLater
})

export default connect(mapStateToProps, null)(WatchLater)
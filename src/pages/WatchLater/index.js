import { connect } from "react-redux";

import WatchLater from "./WatchLater";

const mapStateToProps = state => ({
  movieWatchLater: state.movies.movieWatchLater
})

export default connect(mapStateToProps, null)(WatchLater)
import React, { useEffect } from "react";
import "./index.css";
import CovidStats from "./components/CovidStats";
import { connect } from "react-redux";
import { fetchStats } from "./store/actions";

function App({ fetchStats, loadingStats, errorMessage }) {
  useEffect(() => {
    fetchStats();
  }, [fetchStats]);
  return (
    <div className="App">
      <h1>Welcome to Covid-19 Stats</h1>
      <h2>Facts all about the cats!</h2>
      {!loadingStats ? <CovidStats /> : <div>... Fetching Covid-19 stats</div>}
      {errorMessage !== "" ? <div>{errorMessage}</div> : null}
    </div>
  );
}
function mapStateToProps(state) {
  return {
    loadingStats: state.loadingStats,
    errorMessage: state.errorMessage
  };
}
export default connect(mapStateToProps, { fetchStats })(App);

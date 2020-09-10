import React, { useEffect } from "react";
import { Spinner } from 'reactstrap';
import "./index.css";
import CovidStats from "./components/CovidStats";
import { connect } from "react-redux";
import { fetchStats } from "./actions";

function App({ fetchStats, loadingStats, errorMessage }) {
  useEffect(() => {
    fetchStats();
  }, [fetchStats]);
  return (
    <div className="App">
      <h1>COVID-19 Stats</h1>
      <h3>Lookup Stats by Country</h3>
      {!loadingStats ? <CovidStats /> : <Spinner color="primary" />}
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

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
    <div className="header" style={{ backgroundImage: "url(" + "https://images.unsplash.com/photo-1584118624012-df056829fbd0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2089&q=80" + ")" }}>
      <h1>COVID-19 Stats</h1>
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

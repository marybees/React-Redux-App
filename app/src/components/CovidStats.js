import React from "react";
import { connect } from "react-redux";
import Stat from "./Stat";

function CovidStats(props) {
    return (
        <>
            <h3>Global Data</h3>
            {/* <div>{props.stats[0].Country}</div> */}
            <div>{props.stats.map((stat) => {
                return <Stat key={props.stats.Country} stat={stat} />;
            })}</div>
        </>
    );
}

function mapStateToProps(state) {
    return {
        stats: state.stats
    };
}

export default connect(mapStateToProps, {})(CovidStats);

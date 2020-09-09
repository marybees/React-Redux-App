import React from "react";
import { connect } from "react-redux";
import Stat from "./Stat";

function CovidStats(props) {
    return (
        <>
            <h3>Covid Stats</h3>
            {props.stats.map((stat) => {
                return <Stat key={stat._id} stat={stat} />;
            })}
        </>
    );
}

function mapStateToProps(state) {
    return {
        stats: state.stats
    };
}

export default connect(mapStateToProps, {})(CovidStats);

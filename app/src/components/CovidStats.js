import React, { useState } from "react";
import { connect } from "react-redux";
import Stat from "./Stat";

function CovidStats(props) {

    const [search, setSearch] = useState('')

    const filteredCountries = props.stats.filter(country => {
        return country.Country.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <>
            <h3>Global Data</h3>
            <forms>
                <input type='text' placeholder='Search for a Country' onChange={e => setSearch(e.target.value)} />
            </forms>
            <div>{filteredCountries.map((stat) => {
                return <Stat key={stat.Country} stat={stat} />;
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

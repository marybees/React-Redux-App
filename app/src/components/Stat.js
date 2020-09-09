import React from "react";

function Stat({ stat }) {
    return (
        <div>
            <h4>{stat.Country}</h4>
            <p>Total Deaths: {stat.TotalDeaths}</p>
        </div>
    )
}

export default Stat;

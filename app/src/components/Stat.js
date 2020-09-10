import React from "react";
import { Table } from 'reactstrap';

function Stat({ stat }) {
    return (
        <Table dark>
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Total Confirmed</th>
                    <th>Total Deaths</th>
                    <th>Total Recovered</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{stat.Country}</td>
                    <td>{stat.TotalConfirmed}</td>
                    <td>{stat.TotalDeaths}</td>
                    <td>{stat.TotalRecovered}</td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Stat;

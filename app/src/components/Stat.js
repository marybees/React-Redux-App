import React from "react";
import { Table } from 'reactstrap';

function Stat({ stat }) {
    return (
        <Table responsive dark>
            <thead>
                <tr>
                    <th>Country</th>
                    <th>Confirmed</th>
                    <th>Deaths</th>
                    <th>Recovered</th>
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

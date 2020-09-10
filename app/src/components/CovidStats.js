import React, { useState } from "react";
import { Form, FormGroup, Input } from 'reactstrap';
import { connect } from "react-redux";
import Stat from "./Stat";

function CovidStats(props) {

    const [search, setSearch] = useState('')

    const filteredCountries = props.stats.filter(country => {
        return country.Country.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <>
            <Form>
                <FormGroup>
                    <Input style={{ width: "30%", textAlign: "center" }} type='text' placeholder='Search for a Country' onChange={e => setSearch(e.target.value)} />
                </FormGroup>
            </Form>
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

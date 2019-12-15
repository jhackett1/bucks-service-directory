import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import LocationFilter from "./LocationFilter"
// import Filter from "./Filter"
// import ShareDialog from "../ShareDialog"
import config from "../../_config"

const Outer = styled.section`
    padding: 15px;
`

const Inner = styled.div`
    @media screen and (min-width: 700px){
        display: flex;
        flex-direction: row;
        align-items: flex-start;
    }
`
const Filters = () =>
    <Outer>
        <Inner>
            <LocationFilter/>
            {/* <Filter
                label="Interests"
                name="category"
                options={config.interestsOptions}
            />
            <Filter
                label="Kinds of support"
                name="keywords"
                options={config.supportOptions}
            />
            <Filter
                label="When you're free"
                name="days"
                options={config.daysOptions}
            />
            <Filter
                label="Ages"
                name="age"
                options={config.ageOptions}
            />
            <Filter
                label="Accessibility"
                name="accessibility"
                options={config.accessibilityOptions}
            /> */}
            {/* <ShareDialog/> */}
        </Inner>
    </Outer>
    
export default Filters

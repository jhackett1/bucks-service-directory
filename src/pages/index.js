import React from "react"
import styled from "styled-components"
import theme from "../components/_theme"
import Layout from "../components/Layout"
import PageHeader from "../components/PageHeader"
import Form from "../components/Form"
import AlertBox from "../components/AlertBox"

const Outer = styled.div`
    padding: 60px 15px;
`

const ContentArea = styled.div`
    max-width: ${theme.maxWidth};
    margin: 0px auto;
`

const TwoThirdsColumn = styled.div`
    max-width: calc(${theme.maxWidth} / 3 * 2 );
`

const IndexPage = () =>
    <Layout>
        <PageHeader/>
        <Outer>
            <ContentArea>
                <TwoThirdsColumn>
                    <AlertBox>
                           <p>Activities and services may be affected by <a href="https://www.nhs.uk/conditions/coronavirus-covid-19/">coronavirus</a>.</p>
                           <p>Before attending, check the activity is running and that the organisers are following government guidance.</p>
      
                           <p>Our <a href="https://www.bucksfamilyinfo.org/kb5/buckinghamshire/fsd/contact.page">family information service</a> supports families with children aged under 19 (or under 25 for those with SEND). They can provide urgent help, like food parcels or emergency respite childcare.</p>
                    </AlertBox>
                    <Form/>
                </TwoThirdsColumn>
            </ContentArea>
        </Outer>
    </Layout>

export default IndexPage

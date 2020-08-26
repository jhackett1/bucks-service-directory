import React from "react"
import styled from "styled-components"
import theme from "../_theme"
import unfilled from "./unfilled.svg"
import filled from "./filled.svg"
import { ShortlistContextConsumer } from "../../contexts/shortlistContext"

const Outer = styled.div`
    display: block;
    z-index: 0;
    position: relative;
    margin-top: 10px;
    @media screen and (min-width: 400px){
        display: inline-block;
        position: absolute;
        right: 17px;
        bottom: 17px;
        margin-top: 0px;
    }
`

const Button = styled.button`
    margin-left: auto;
    border-radius: 100%;
    padding: 10px;
    height: 40px;
    width: 40px;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.paleOrange};
    &:hover{
        background: ${theme.paleOrange};
    }
    &:focus{
        outline: none;
        box-shadow: 0px 0px 0px 3px ${theme.focus};         
    }
    @media screen and (min-width: 400px){
        background: none;
    }

`

const ShortlistButton = ({
    service
}) => 
<ShortlistContextConsumer>
    { context =>
        <Outer aria-live="polite">
            {context.isInShortlist(service.assetId) ? 
                <Button onClick={()=>{context.removeFromShortlist(service.assetId)}} title="Remove from shortlist">
                    <img alt="Remove from shortlist" src={filled}/>
                </Button>
                : 
                <Button onClick={()=>{context.addToShortlist(service)}} title="Add to shortlist" >
                    <img alt="Add to shortlist" src={unfilled}/>
                </Button>
            }
        </Outer>
    }
</ShortlistContextConsumer>

export default ShortlistButton
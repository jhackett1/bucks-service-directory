import styled from "styled-components"
import theme from "../_theme"
import { Dialog } from "@reach/dialog"
import arrow from "./arrow-down.svg"

export const OpenButton = styled.button`
    background: none;
    border: none;
    padding: 5px 0px;
    font-size: 1em;
    color: ${theme.grey1};
    cursor: pointer;
    margin-right: 20px;
    font-weight: ${(props) => props.active ? "bold" : "normal"};
    &:focus{
        outline: 3px solid ${theme.focus};
        background: ${theme.focus};               
    }
    &:after{
        content: "";
        display: inline-block;
        width: 10px;
        height: 10px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(${arrow});
        margin-left: 7px;
    }
`

export const StyledDialog = styled(Dialog)`
    max-width: 500px;
    position: relative;
    padding: 0px;
    box-shadow: 0px 2px 4px rgba(0,0,0,0.2);
    color: ${theme.grey1};
`

export const Inner = styled.fieldset`
    display: block;
    border: none;
    padding: 30px; 
    padding-bottom: 20px;     
`

export const Headline = styled.h3`
    color: ${theme.darkText};
    font-size: 1.5em;
    margin-bottom: 25px;
`

export const Grid = styled.div`
    padding-bottom: 55px;   
    @media screen and (min-width: 700px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 30px;
    }
`

export const CloseButton = styled.button`
    background: none;
    border: none;
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    &:focus{
        outline: 3px solid ${theme.focus};
        background: ${theme.focus};               
    }
`

export const Footer = styled.footer`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.grey5};

`

export const Button = styled.button`
    background: none;
    border: none;
    color: ${theme.grey1};
    font-size: 1em;
    font-weight: bold;
    cursor: pointer;
    padding: 25px 30px;
    &:focus{
        outline: 3px solid ${theme.focus};
    }
    &:hover{
        background: ${theme.grey4};
    }
`

export const ClearButton = styled(Button)`
    font-weight: normal;
`
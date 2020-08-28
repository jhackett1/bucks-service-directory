import React, { useState } from "react"
import styled from "styled-components"
import theme from "../_theme"
import Checkbox, { Checkboxes } from "../Checkbox"
import config from "../../_config"

const Fieldset = styled.fieldset`
    border: none;
    margin-bottom: 55px;
`

const Question = styled.p`
    color: ${theme.grey1};
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 1.5rem;
`

const Hint = styled.p`
    color: ${theme.grey2};
`

const Outer = styled.div`
    margin-bottom: 55px;
`


const InterestsQuestion = () => {

    const [isCoronaCategorySelected, setIsCoronavirusCategorySelected] = useState(false);
    const [isSupportCategorySelected, setIsSupportCategorySelected] = useState(false);

return (
    <Fieldset>
        <Outer>
            <legend>
                <Question>What do you need help with?</Question>
                <Hint>Choose as many as you like</Hint>
            </legend>
            <Checkboxes>
                {config.interestsOptions.map(option => {
                    if(option.value === "support"){
                        return(
                            <Checkbox 
                                name="category" 
                                value={option.value}
                                key={option.value}
                                onChange={e => setIsSupportCategorySelected(isSupportCategorySelected => !isSupportCategorySelected)}
                            >
                                {option.label}
                            </Checkbox>
                        )
                    }
                    else if(option.value === "coronavirus"){
                        return(
                            <Checkbox 
                                name="category" 
                                value={option.value}
                                key={option.value}
                                onChange={e => setIsCoronavirusCategorySelected(isCoronaCategorySelected => !isCoronaCategorySelected)}
                            >
                                {option.label}
                            </Checkbox>
                        )
                    } else {
                        return <Checkbox name="category" value={option.value} key={option.value}>{option.label}</Checkbox>
                    }
                })}
            </Checkboxes>
        </Outer>

        {isCoronaCategorySelected && 
            <Outer>
            <legend>
                <Question>{config.interestsOptions.filter(s => s.value === 'coronavirus' )[0].label}</Question>
                <Hint>Choose as many as you like</Hint>
            </legend>
            <Checkboxes>
                {config.coronaCategoryOptions.map(option => {
                    return (<Checkbox name="keywords" value={option.value} key={option.value}>{option.label}</Checkbox>)
                })}
            </Checkboxes>
            </Outer>
        }

        {isSupportCategorySelected && 
            <Outer>
            <legend>
                <Question>{config.interestsOptions.filter(s => s.value === 'support' )[0].label}</Question>
                <Hint>Choose as many as you like</Hint>
            </legend>
            <Checkboxes>
                {config.supportCategoryOptions.map(option => {
                    return (<Checkbox name="keywords" value={option.value} key={option.value}>{option.label}</Checkbox>)
                })}
            </Checkboxes>
            </Outer>
        }
    </Fieldset>
)
    }

export default InterestsQuestion
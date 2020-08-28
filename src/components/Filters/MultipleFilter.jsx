import React, { useState, useEffect }  from "react"
import Checkbox from "../Checkbox"
import { useHistory } from "react-router-dom"
import queryString from "query-string"
import cross from "../DetailDialog/cross.svg"
import {
    StyledDialog,
    Inner,
    Headline,
    Grid,
    Footer,
    Button,
    OpenButton,
    CloseButton,
    ClearButton
} from "./utils"


const MultipleFilter = ({
    label,
    options,
    setInitialBounds
}) => {

    const history = useHistory()
    const query = queryString.parse(history.location.search)
    const [dialogOpen, toggleDialog] = useState(false)


    const [category, changeCategory] = useState([]) 
    const [keywords, changeKeywords] = useState([]) 
    
    const [isCoronaCategorySelected, setIsCoronavirusCategorySelected] = useState(false);
    const [isSupportCategorySelected, setIsSupportCategorySelected] = useState(false);


    // set states from query

    const setCategoryFromQuery = () => {
        if(query.category){
            changeCategory([].concat(query.category))
        } else {
            changeCategory([]) 
        }
         // When the page loads we need to set the initial keyword section visibility
        (query.category && query.category.includes('coronavirus')) ? setIsCoronavirusCategorySelected(true) : setIsCoronavirusCategorySelected(false);
        (query.category && query.category.includes('support')) ? setIsSupportCategorySelected(true) : setIsSupportCategorySelected(false) 
    }


    const setKeywordsFromQuery = () =>{
        if(query['keywords']){
            changeKeywords([].concat(query.keywords))
        } else {
            changeKeywords([]) 
        }
    }


    // events


    const handleCategoryChange = (e) => {
        let {checked, value} = e.target
        if(checked){
            changeCategory([...category, value]  )
        } else {
            changeCategory(category.filter(el => el !== value))
        }


        // when the category changes we need to toggle visibility of the keyword sections (again)
        if(checked) {
            if(value === 'coronavirus') {
                setIsCoronavirusCategorySelected(true);
            }
            else if (value === 'support') {
                setIsSupportCategorySelected(true)
            }
        } else {
            if(value === 'coronavirus') {
                setIsCoronavirusCategorySelected(false)
            }
            else if (value === 'support') {
                setIsSupportCategorySelected(false) 
            }
        }


        // we also need to uncheck any keywords relevant to the support or coronavirus categories
        if(!checked) {
            if(value === 'coronavirus') {
                // remove coronavirus keywords
                removeKeywordsRelatedTo('coronavirus')
            }
            else if (value === 'support') {
                // remove support keywords
                removeKeywordsRelatedTo('support');
            }
        }

    }


    const handleKeywordChange = (e) => {
        let {checked, value} = e.target
        if(checked){
            changeKeywords([...keywords, value]  )
        } else {
            changeKeywords(keywords.filter(el=> el !== value))
        }
    }



    /**
     * Removes any keywords relating to the given type (coronavirus / support)
     * Updates the keyword state
     * @param {*} type 
     */
    const removeKeywordsRelatedTo = (type) => {
        let opts = false;
        if(type === 'coronavirus') {
            opts = options.coronaCategoryOptions 
        }
        if(type === 'support') {
            opts = options.supportCategoryOptions 
        }
        if(opts) {
                opts.map((o, i) => {
                    if(keywords.includes(o.value)) {
                        keywords.splice(keywords.indexOf(o.value), 1);
                    }
                    return true
                })
                changeKeywords(keywords)
        } 
    }

    useEffect(()=>{
        setCategoryFromQuery()
        setKeywordsFromQuery()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    const closeWithoutSaving = () => {
        setCategoryFromQuery()
        setKeywordsFromQuery()
        toggleDialog(false)
    }

    const clearFilter = (e) => {
        if(e) e.preventDefault()
        changeCategory([])
        changeKeywords([])
        setIsCoronavirusCategorySelected(false);
        setIsSupportCategorySelected(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        query.category = category
        query.keywords = keywords
        setInitialBounds(false)
        history.push(`/services?${queryString.stringify(query)}`)
        toggleDialog(false)
    }

    return(
        <>
            <OpenButton 
                active={category.length > 0} 
                onClick={() => {toggleDialog(true)}} 
                className={`${label}-opener`}
            >
                {label}
            </OpenButton>
            <StyledDialog
                aria-label={`${label}-filter`}
                isOpen={dialogOpen}
                className={`${label}-dialog`}
                onDismiss={closeWithoutSaving}
            >
                <CloseButton onClick={closeWithoutSaving}>
                    <img src={cross} alt="Close without saving"/>
                </CloseButton>
                <form onSubmit={handleSubmit}>
                    <Inner>
                        <Headline><legend>{label}</legend></Headline>
                        <Grid>
                            {options.interestsOptions.map((option)=>
                                <Checkbox 
                                    key={option.value}
                                    name='category'
                                    value={option.value} 
                                    onChange={handleCategoryChange} 
                                    checked={category.includes(option.value)}
                                >
                                    {option.label}
                                </Checkbox>
                            )}
                        </Grid>


                        {isCoronaCategorySelected && 
                            <>
                                <Headline><legend>{options.interestsOptions.filter(s => s.value === 'coronavirus' )[0].label}</legend></Headline>
                                <Grid>
                                    {options.coronaCategoryOptions.map((option)=>
                                        <Checkbox 
                                            key={option.value}
                                            name='keywords' 
                                            value={option.value} 
                                            onChange={handleKeywordChange} 
                                            checked={keywords.includes(option.value)}
                                        >
                                            {option.label}
                                        </Checkbox>
                                    )}
                                </Grid>
                            </>
                        }



                        {isSupportCategorySelected &&  
                            <>
                                <Headline><legend>{options.interestsOptions.filter(s => s.value === 'support' )[0].label}</legend></Headline>
                                <Grid>
                                    {options.supportCategoryOptions.map((option)=>
                                        <Checkbox 
                                            key={option.value}
                                            name='keywords'
                                            value={option.value} 
                                            onChange={handleKeywordChange} 
                                            checked={keywords.includes(option.value)}
                                        >
                                            {option.label}
                                        </Checkbox>
                                    )}
                                </Grid>
                            </>
                        }


                    </Inner>
                    <Footer>
                        <Button type="submit">Apply</Button>
                        <ClearButton onClick={clearFilter}>Clear</ClearButton>
                    </Footer>
                </form>
            </StyledDialog>
        </>
    )
}

export default MultipleFilter
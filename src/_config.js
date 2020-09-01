// Non-secret config goes here...

module.exports = {
    // Options for forms and filters
    interestsOptions: [
        {
            value: "coronavirus",
            label: "Staying at home due to coronavirus"
        },
        {
            value: "active",
            label: "Staying active"
        },
        {
            value: "social",
            label: "Socialising"
        },
        {
            value: "learning",
            label: "Learning new things"
        },
        {
            value: "cultural",
            label: "Culture and visiting new places"
        },
        {
            value: "support",
            label: "Support with health and wellbeing"
        }
    ],
    coronaCategoryOptions: [
        {
            value: "corona-shopping",
            label: "Groceries and help with shopping"
        },
        {
            value: "corona-prescription",
            label: "Prescription collection and delivery"
        },
        {
            value: "corona-food-collection-delivery",
            label: "Food and drink collection and delivery"
        },
        {
            value: "corona-entertainment",
            label: "Book drops and entertainment"
        },
        {
            value: "corona-pets",
            label: "Dog walking and help with pets"
        },
    ],
    supportCategoryOptions: [
        {
            value: "befriending",
            label: "Befriending"
        },
        {
            value: "faith-groups",
            label: "Faith groups"
        },
        {
            value: "foodbanks",
            label: "Foodbanks"
        },
        {
            value: "health-wellbeing-disability-support",
            label: "Health, wellbeing & disability support"
        },
        {
            value: "elderly-services",
            label: "Services for older people"
        },
        {
            value: "transport",
            label: "Transport"
        },
    ],
    // supportOptions: [
    //     {
    //         value: "caring",
    //         label: "Caring for someone else"
    //     },
    //     {
    //         value: "transport",
    //         label: "Getting out and about"
    //     },
    //     {
    //         value: "housework",
    //         label: "Housework"
    //     },
    //     {
    //         value: "meals",
    //         label: "Meals and nutrition"
    //     },
    //     {
    //         value: "equipment",
    //         label: "Equipment and safety at home"
    //     },
    //     {
    //         value: "hygiene",
    //         label: "Personal hygiene and incontinence"
    //     },
    //     {
    //         value: "money",
    //         label: "Paying for things"
    //     },
    // ],
    daysOptions: [
        {
            value: "monday",
            label: "Monday"
        },
        {
            value: "tuesday",
            label: "Tuesday"
        },
        {
            value: "wednesday",
            label: "Wednesday"
        },
        {
            value: "thursday",
            label: "Thursday"
        },
        {
            value: "friday",
            label: "Friday"
        },
        {
            value: "saturday",
            label: "Saturday"
        },
        {
            value: "sunday",
            label: "Sunday"
        }
    ],
    ageOptions: [
        {
            value: "young people",
            label: "Young people"
        },{
            value: "young adults",
            label: "Young adults"
        },{
            value: "older adults",
            label: "Older adults"
        }
    ],
    accessibilityOptions: [
        {
            value: "nearby bus stop",
            label: "Nearby bus stop"
        },{
            value: "on-site parking",
            label: "On-site parking"
        },{
            value: "wc wheelchair access",
            label: "Wheelchair-accessible bathroom"
        },    {
            value: "building lift",
            label: "Building has lift"
        },{
            value: "hearing induction loop",
            label: "Hearing induction loop"
        },{
            value: "building wheelchair access",
            label: "Building has wheelchair access"
        }
    ]
}

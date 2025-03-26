const categories = [
    {
        type: "income",
        name: "Salary",
        icon: "<svg>...</svg>", 
        subcategories: []
    },
    {
        type: "income",
        name: "Freelancing",
        icon: "<svg>...</svg>",
        subcategories: []
    },
    {
        type: "expense",
        name: "Shopping",
        icon: "<svg>...</svg>",
        subcategories: [
            { name: "Clothing", icon: "<svg>...</svg>" },
            { name: "Shoes", icon: "<svg>...</svg>" },
            { name: "Gifts", icon: "<svg>...</svg>" },
            { name: "Technology", icon: "<svg>...</svg>" }
        ]
    },
    {
        type: "expense",
        name: "Eating Out",
        icon: "<svg>...</svg>",
        subcategories: [
            { name: "Restaurants", icon: "<svg>...</svg>" },
            { name: "Cafes", icon: "<svg>...</svg>" }
        ]
    },
    {
        type: "expense",
        name: "Education",
        icon: "<svg>...</svg>",
        subcategories: [
            { name: "Books", icon: "<svg>...</svg>" },
            { name: "Courses", icon: "<svg>...</svg>" }
        ]
    }
];

export default categories;

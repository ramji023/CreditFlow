import income_icon from "../assets/category_image/income-icon.png"
import income from "../assets/category_image/income.png"
import jobs from "../assets/category_image/salary.png"
import pension from "../assets/category_image/pension.png"
import other from "../assets/category_image/other-expenses.png"
import shopping_icon from "../assets/category_image/shopping-icons.png"
import shopping from "../assets/category_image/shopping.png"
import clothing from "../assets/category_image/cloths.png"
import shoes from "../assets/category_image/shoes.png"
import gifts from "../assets/category_image/gifts.png"
import technology from "../assets/category_image/technology.png"
import bar from "../assets/category_image/bar.png"
import eating_out from "../assets/category_image/eating-out.png"
import food from "../assets/category_image/food.png"
import drinks from "../assets/category_image/drinks.png"
import transportation_icon from "../assets/category_image/transportation_icon.png"
import transportation from "../assets/category_image/transportation.png"
import car from "../assets/category_image/car.png"
import fuel from "../assets/category_image/fuel.png"
import insurance from "../assets/category_image/insurance.png"
import entertainment from "../assets/category_image/entertainment.png"
import comic from "../assets/category_image/books-comic.png"
import home from "../assets/category_image/house.png"
import rent from "../assets/category_image/rent.png"
import energy_bill from "../assets/category_image/energy-bill.png"
import water_bill from "../assets/category_image/water-bill.png"
import garbage_bill from "../assets/category_image/garbage-bill.png"
import family from "../assets/category_image/family.png"
import children from "../assets/category_image/children.png"
import health from "../assets/category_image/health.png"
import sport from "../assets/category_image/sports.png"
import pets from "../assets/category_image/pets.png"
import food_pets from "../assets/category_image/pet-food.png"
import travel from "../assets/category_image/travels.png"
import accommodation from "../assets/category_image/accommodation.png"
import taxes from "../assets/category_image/tax.png"
import smoking from "../assets/category_image/smoking.png"
const categories = [
    {
        type: "income",
        name: "Income",
        icon: income_icon,
        subcategories: [
            {
                name: "Salary",
                icon: income
            },
            {
                name: "Odd Jobs",
                icon: jobs,
            },
            {
                name: "Pension",
                icon: pension
            }
        ]
    },
    {
        type: "income",
        name: "Other",
        icon: other,
    },
    {
        type: "expense",
        name: "Shopping",
        icon: shopping_icon,
        subcategories: [
            { name: "Shopping", icon: shopping },
            { name: "Clothing", icon: clothing },
            { name: "Shoes", icon: shoes },
            { name: "Gifts", icon: gifts },
            { name: "Technology", icon: technology }
        ]
    },
    {
        type: "expense",
        name: "Food/Drinks",
        icon: food,
        subcategories: [
            { name: "Food/Drinks", icon: drinks },
            { name: "Eating Out", icon: eating_out },
            { name: "Bar", icon: bar }
        ]
    },
    {
        type: "expense",
        name: "Transportation",
        icon: transportation_icon,
        subcategories: [
            { name: "Transportation", icon: transportation },
            { name: "Car", icon: car },
            { name: "Fuel", icon: fuel },
            { name: "Insurance", icon: insurance },
        ]
    },
    {
        type: "expense",
        name: "Entertainment",
        icon: entertainment,
        subcategories: [
            { name: "Entertainment", icon: entertainment },
            { name: "Books/Comics", icon: comic },
        ]
    },
    {
        type: "expense",
        name: "Home",
        icon: home,
        subcategories: [
            { name: "Home", icon: home },
            { name: "Rent", icon: rent },
            { name: "Energy bill", icon: energy_bill },
            { name: "Water bill", icon: water_bill },
            { name: "Garbage bill", icon: garbage_bill },
        ]
    },
    {
        type: "expense",
        name: "Family",
        icon: family,
        subcategories: [
            { name: "Family", icon: family },
            { name: "Children", icon: children },
        ]
    },
    {
        type: "expense",
        name: "Health",
        icon: health,
        subcategories: [
            { name: "Health", icon: health },
            { name: "Sport", icon: sport },
        ]
    },
    {
        type: "expense",
        name: "Pets",
        icon: pets,
        subcategories: [
            { name: "Pets", icon: pets },
            { name: "Food - Pets", icon: food_pets },
        ]
    },
    {
        type: "expense",
        name: "Travels",
        icon: travel,
        subcategories: [
            { name: "Travels", icon: travel },
            { name: "Accommodation", icon: accommodation },
        ]
    },
    {
        type: "expense",
        name: "Other",
        icon: other,
        subcategories: [
            { name: "Others", icon: other },
            { name: "Taxes", icon: taxes },
            { name: "Smoking", icon: smoking },
        ]
    }
];

export default categories;

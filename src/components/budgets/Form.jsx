import categories from "../../utils/categories";
import { useState } from "react";
const Form = ({ formData, addFormData }) => {
    // render category input field
    const [categoryName, setCategoryName] = useState(null);
    const [categoryDropdownOpen, setCategoryDropdown] = useState(false);
    // handle to handle cateogry name selected by user
    function handleCategoryName(category) {
        setCategoryName(category);
        addFormData((form) => {
            return form.map((formdata) => formdata.id === formData.id ? { ...formdata, category: category.name } : formdata)
        })
        setSubCategoryName(null);
        setCategoryDropdown(false);
    }

    //render sub category input field
    const [subCategoryName, setSubCategoryName] = useState(null);
    const [subCategoryDropdownOpen, setSubCategoryDropdownOpen] = useState(false);
    // handle to handle sub-cateogry name selected by user
    function handleSubCategoryName(subCategory) {
        setSubCategoryName(subCategory);
        addFormData((form) => {
            return form.map((formdata) => formdata.id === formData.id ? { ...formdata, subCategory: subCategory.name } : formdata)
        })
        setSubCategoryDropdownOpen(false);
    }

    // handle budget amount
    // const [budgetAmount, setBudgetAmount] = useState(0);
    function handleBudgetAmount(id, newValue) {
        addFormData((form) => {
            return form.map((formdata) => formdata.id === id ? { ...formdata, amount: newValue } : formdata)
        })
    }

    // const [repeat, setRepeat] = useState('');
    function handleRepeat(id, newValue) {
        addFormData((form) => {
            return form.map((formdata) => formdata.id === id ? { ...formdata, repeat: newValue } : formdata)
        })
    }
    return (
        <>
            <div>
                <div onClick={() => setCategoryDropdown((prev) => !prev)}>
                    {categoryName ? (<>
                        <img src={categoryName.icon} alt={categoryName.name} />
                        <span>{categoryName.name}</span>
                    </>) : (<> <span>select category name</span></>)}
                </div>
                {categoryDropdownOpen && (
                    <>
                        {categories
                            .filter((category) => category.type === 'expense')
                            .map((category) => (
                                <div key={category.name} onClick={() => handleCategoryName(category)}>
                                    <img src={category.icon} alt={category.name} />
                                    <span>{category.name}</span>
                                </div>
                            ))
                        }
                    </>
                )}
            </div>
            {
                categoryName && (<>
                    <div>
                        <div onClick={() => setSubCategoryDropdownOpen((prev) => !prev)}>
                            {subCategoryName ? (<>
                                <img src={subCategoryName.icon} alt={subCategoryName.name} />
                                <span>{subCategoryName.name}</span>
                            </>) : (<><span>select sub category name</span></>)}
                        </div>

                        {subCategoryDropdownOpen && (
                            <>
                                {categoryName.subcategories.map((subCategory) => (
                                    <div key={subCategory.name} onClick={() => handleSubCategoryName(subCategory)}>
                                        <img src={subCategory.icon} alt={subCategory.name} />
                                        <span>{subCategory.name}</span>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>
                </>)
            }

            <div>
                <input type="number" value={formData.amount} onChange={(e) => handleBudgetAmount(formData.id, e.target.value)} placeholder="₹" />
            </div>

            <div>
                <select value={formData.repeat} onChange={(e) => handleRepeat(formData.id, e.target.value)}>
                    <option value="" disabled>select repeat</option>
                    <option value="Daily">Daily</option>
                    <option value="Weekdays">Weekdays</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                    <option value="NoRepeating">No repeating</option>
                </select>
            </div>
        </>
    )
}

export default Form;
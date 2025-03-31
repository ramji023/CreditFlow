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
            <div className="p-2 bg-white flex items-center gap-4">
                {/* Category Dropdown */}
                <div className="relative flex-1 min-w-[180px]">
                    <div
                        className="p-2 border rounded cursor-pointer flex items-center gap-x-1 hover:border-gray-400"
                        onClick={() => setCategoryDropdown((prev) => !prev)}
                    >
                        {categoryName ? (
                            <>
                                <img src={categoryName.icon} alt={categoryName.name} className="w-6 h-6 mr-2" />
                                <span className="truncate">{categoryName.name}</span>
                            </>
                        ) : (
                            <span className="text-gray-500 truncate">Select category</span>
                        )}
                    </div>
                    {categoryDropdownOpen && (
                        <div className="absolute left-0 right-0 mt-1 border bg-gray-50 shadow-lg rounded-md z-10 max-h-40 overflow-y-auto">
                            {categories
                                .filter((category) => category.type === "expense")
                                .map((category) => (
                                    <div
                                        key={category.name}
                                        className="p-2 flex items-center cursor-pointer hover:bg-gray-100"
                                        onClick={() => handleCategoryName(category)}
                                    >
                                        <img src={category.icon} alt={category.name} className="w-6 h-6 mr-2" />
                                        <span className="truncate">{category.name}</span>
                                    </div>
                                ))}
                        </div>
                    )}
                </div>

                {/* Subcategory Dropdown */}
                {categoryName && (
                    <div className="relative flex-1 min-w-[180px]">
                        <div
                            className="p-2 border rounded cursor-pointer flex items-center gap-x-1 hover:border-gray-400"
                            onClick={() => setSubCategoryDropdownOpen((prev) => !prev)}
                        >
                            {subCategoryName ? (
                                <>
                                    <img src={subCategoryName.icon} alt={subCategoryName.name} className="w-6 h-6 mr-2" />
                                    <span className="truncate">{subCategoryName.name}</span>
                                </>
                            ) : (
                                <span className="text-gray-500 truncate">Select sub-category</span>
                            )}
                        </div>
                        {subCategoryDropdownOpen && (
                            <div className="absolute left-0 right-0 mt-1 border bg-gray-50 shadow-lg rounded-md z-10 max-h-40 overflow-y-auto">
                                {categoryName.subcategories.map((subCategory) => (
                                    <div
                                        key={subCategory.name}
                                        className="p-2 flex items-center cursor-pointer hover:bg-gray-100"
                                        onClick={() => handleSubCategoryName(subCategory)}
                                    >
                                        <img src={subCategory.icon} alt={subCategory.name} className="w-6 h-6 mr-2" />
                                        <span className="truncate">{subCategory.name}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                )}

                {/* Rest of the form remains same */}
                <input
                    type="number"
                    value={formData.amount}
                    onChange={(e) => handleBudgetAmount(formData.id, e.target.value)}
                    placeholder="₹ Enter amount"
                    className="flex-1 min-w-[120px] p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <select
                    value={formData.repeat}
                    onChange={(e) => handleRepeat(formData.id, e.target.value)}
                    className="flex-1 min-w-[120px] p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="" disabled>Select repeat</option>
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
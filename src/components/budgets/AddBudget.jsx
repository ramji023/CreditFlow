import { useState } from "react"
import Form from "./Form"
import { X, Plus } from "lucide-react"
const AddBudget = ({ closeModel, className }) => {
    const [forms, addForm] = useState([
        {
            id: 1,
            category: '',
            subCategory: '',
            amount: 0,
            repeat: '',
        }
    ])
    //dynamically add form
    function handleAddForm() {
        addForm((prev) => [...prev, {
            id: prev[prev.length - 1].id + 1,
            category: '',
            subCategory: '',
            amount: 0,
            repeat: '',
        }])
    }
    // print all the budget data
    function printFullBudgetData() {
        console.log(forms);
    }
    return (
        <>
            <div className={`bg-white p-6 relative min-h-[300px] ${className || ''}`}>
                {/* Close Button */}
                <button className="absolute top-4 right-4 text-gray-500 hover:text-red-600" onClick={closeModel}>
                    <X className="w-6 h-6" />
                </button>

                <div className="mt-8 max-h-[55vh] overflow-y-auto pb-10"> {/* Added pb-4 for bottom padding */}
                    {/* Forms List */}
                    <div className="space-y-4">
                        {forms.map((form) => (
                            <div key={form.id}>
                                <Form formData={form} addFormData={addForm} />
                            </div>
                        ))}
                    </div>
                </div>
                {/* Single Plus Button */}
                <div className="sticky bottom-0 bg-white pt-4 pb-2">
                    <button
                        className="ml-auto bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 shadow-md flex items-center justify-center"
                        onClick={handleAddForm}
                        style={{ width: '40px', height: '40px' }}
                    >
                        <Plus className="w-5 h-5" />
                    </button>
                </div>
                {/* Footer Buttons with increased spacing */}
                <div className=" flex justify-between border-t pt-6"> {/* Changed mt-6 to mt-12 and pt-4 to pt-6 */}
                    <button
                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400"
                        onClick={closeModel}
                    >
                        Cancel
                    </button>
                    <button
                        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                        onClick={printFullBudgetData}
                    >
                        Submit
                    </button>
                </div>
            </div>
        </>
    )
}

export default AddBudget;
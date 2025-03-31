import categories from "../../utils/categories"
import { useState } from "react"
import Form from "./Form"
const AddBudget = () => {
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
    function printFullBudgetData (){
        console.log(forms);
    }
    return (
        <>
            {forms.map((form) => (
                <div key={form.id}>
                    <Form formData={form} addFormData={addForm} />
                </div>
            ))}
            <button onClick={handleAddForm}>add budget</button>
            <div>
            <button onClick={printFullBudgetData}>submit all data</button>
            </div>
            
        </>
    )
}

export default AddBudget;
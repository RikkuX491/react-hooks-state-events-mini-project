import React from "react";
import {useState} from "react"

function NewTaskForm({categories, updateFormData, onTaskFormSubmit}) {

  const [formData, setFormData] = useState({
    text: "",
    category: "Code"
  })

  function updateFormData(event){
    setFormData({...formData, [event.target.name]: event.target.value})
  }

  const filteredCategories = categories.filter(category => {
    return category !== "All"
  })

  const optionElements = filteredCategories.map(category => {
    return <option key={category} value={category}>{category}</option>
  })

  return (
    <form onSubmit={(event) => {
      event.preventDefault()
      onTaskFormSubmit(formData)
    }} className="new-task-form">
      <label>
        Details
        <input onChange={updateFormData} type="text" name="text" value={formData.text} />
      </label>
      <label>
        Category
        <select onChange={updateFormData} name="category" value={formData.category}>
          {optionElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;

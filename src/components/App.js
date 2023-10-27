import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import {useState} from "react"

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  
  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  function deleteTask(text){
    setTasks(tasks.filter(task => {
      return task.text !== text
    }))
  }

  function updateSelectedCategory(event){
    setSelectedCategory(event.target.textContent)
  }

  const filteredTasks = tasks.filter(task => {
    if(selectedCategory === 'All'){
      return true
    }
    return selectedCategory === task.category
  })

  function onTaskFormSubmit(newTask){
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={selectedCategory} updateSelectedCategory={updateSelectedCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;

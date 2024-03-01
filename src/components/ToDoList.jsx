// src/components/ToDoList.jsx

import { useState } from "react";
import Task from "./Task";
import Summary from "./Summary";

const initialTasks = [
    {
    _id: "1a",
    name: "Task1",
    description: "Do something important",
    taskCompleted: false
  },
  {
    _id: "2b",
    name: "Task2",
    description: "Do something important",
    taskCompleted: false
  },
  {
    _id: "3c",
    name: "Task3",
    description: "Do something important",
    taskCompleted: false
  },
];

function ToDoList() {
  const [tasks, setTasks] = useState(initialTasks);
  const [tasksCompleted, setTasksCompleted] = useState(0)

  const toggleTask = (id) => {

    let ourTasks = [...tasks]

    ourTasks.forEach((task) => {
        if (task._id === id) {

            task.taskCompleted = task.taskCompleted ? false : true
            if (task.taskCompleted) {
                console.log("Task completed!!!")
                setTasksCompleted((prev) => prev + 1)
            } else {
                console.log("Task not completed!!!!!!!!!!!!")
                setTasksCompleted((prev) => prev - 1)
            }
        }
    })

    setTasks(ourTasks)

  }

  return (
    <div>
      <Summary tasksCompleted={tasksCompleted} />
      
      <div className="todo-container">
        {tasks.map((task) => <Task key={task._id} task={task} toggleTask={toggleTask} /> )}
      </div>
    </div>
  );
}

export default ToDoList;

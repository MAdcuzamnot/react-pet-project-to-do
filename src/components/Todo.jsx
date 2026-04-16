import { useState, useEffect } from "react"
import Todoinfo from "./Todoinfo"
import TodoList from "./TodoList"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
const Todo = () => {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks')

        if (savedTasks) {
            return JSON.parse(savedTasks)
        }

        return [
            { id: 'task-1', title: 'Buy milk', isDone: true },
            { id: 'task-2', title: 'Buy coffe', isDone: false },
        ]
    })
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const deleteAllTasks = () => {
        const isConfirmed = confirm('Are you sure?')

        if (isConfirmed) {
            setTasks([])
        }
    }

    const deleteTask = (taskId) => {
        setTasks(
            tasks.filter((task) => task.id !== taskId)
        )
    }

    const toggleTaskComplete = (taskId, isDone) => {
        setTasks(
            tasks.map((task) => {
                if (task.id === taskId) {
                    return { ...task, isDone }
                }

                return task
            })
        )
    }

    const addTask = () => {
        if (newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto?.randomUUID() ?? Date.now().toString(),
                title: newTaskTitle,
                isDone: false,
            }

            setTasks([...tasks, newTask])
            setNewTaskTitle('')
        }
    }


    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const clearSearchQuery = searchQuery.trim().toLowerCase()
    const filteredTasks = clearSearchQuery.length > 0
        ? tasks.filter(({ title }) => title.toLowerCase().includes(clearSearchQuery))
        : null

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm 
                addTask={addTask}
                newTaskTitle={newTaskTitle}
                setNewTaskTitle={setNewTaskTitle} 
            />
            <SearchTaskForm 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
            />
            <Todoinfo 
                total={tasks.length}
                done={tasks.filter(({ isDone }) => isDone).length}
                onDeleteAllButtonClick={deleteAllTasks}
            />
            <TodoList 
            tasks={tasks}
            filteredTasks={filteredTasks}
            onDeleteTaskButtonClick={deleteTask}
            onTaskCompleteChange={toggleTaskComplete}
            />
        </div>
    )
}

export default Todo
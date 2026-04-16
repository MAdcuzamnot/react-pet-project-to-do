import Todoinfo from "./Todoinfo"
import TodoList from "./TodoList"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
const Todo = () => {
    const tasks = [
        { id: 'task-1', title: 'Buy milk', isDone: true },
        { id: 'task-2', title: 'Buy coffe', isDone: false },
    ]

    const deleteAllTasks = () => {
        
    }

    const deleteTask = (taskId) => {

    }

    const toggleTaskComplete = (taskId, isDone) => {
        
    }

    const filterTasks = (query) => {

    }

    const addTask = () => {

    }

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm addTask={addTask} />
            <SearchTaskForm onSearchInput={filterTasks} />
            <Todoinfo 
                total={tasks.length}
                done={tasks.filter(({ isDone }) => isDone).length}
                onDeleteAllButtonClick={deleteAllTasks}
            />
            <TodoList 
            tasks={tasks}
            onDeleteTaskButtonClick={deleteTask}
            onTaskCompleteChange={toggleTaskComplete}
            />
        </div>
    )
}

export default Todo
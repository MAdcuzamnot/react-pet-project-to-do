import Todoinfo from "./Todoinfo"
import Todolist from "./TodoList"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
const Todo = () => {
    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm />
            <SearchTaskForm />
            <Todoinfo />
            <Todolist />
        </div>
    )
}

export default Todo
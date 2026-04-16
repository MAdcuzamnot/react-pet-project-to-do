import Todoinfo from "./Todoinfo"
import TodoList from "./TodoList"
import AddTaskForm from "./AddTaskForm"
import SearchTaskForm from "./SearchTaskForm"
const Todo = () => {
    const tasks = [
        { id: 'task-1', title: 'Buy milk', isDone: true },
        { id: 'task-2', title: 'Buy coffe', isDone: false },
    ]

    return (
        <div className="todo">
            <h1 className="todo__title">To Do List</h1>
            <AddTaskForm />
            <SearchTaskForm />
            <Todoinfo 
                total={tasks.length}
                done={tasks.filter(({ isDone }) => isDone).length}
            />
            <TodoList tasks={tasks}/>
        </div>
    )
}

export default Todo
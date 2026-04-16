import Todoitem from "./Todoitem"

const TodoList = () => {
    const hasTasks = true

    if (!hasTasks) {
        return (
            <div className="todo__empty-message"></div>
        )
    }

    return (
        <ul className="todo__list">
            <Todoitem />
            <Todoitem />
        </ul>
    )
}

export default TodoList
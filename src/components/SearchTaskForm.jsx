import Field from "./Field"

const SearchTaskForm = (props) => {
    const {
        seacrhQuery,
        setSearchQuery,
    } = props
    return (
    <form 
        className="todo__form"
        onSubmit={(event) => event.preventDefault()}
    >
        <Field 
            className="todo__field"
            label="Search task"
            id="search-task"
            type="search"
            value={seacrhQuery}
            onInput={(event) => setSearchQuery(event.target.value)}
        />
      </form>
    )
}

export default SearchTaskForm
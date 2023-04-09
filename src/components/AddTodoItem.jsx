const AddNewTodo = (props) => {
    return(
        <div>
            <input type='text' value={props.newTodoTitle} onChange={props.updateNewTodoTitle} />
            <button onClick={props.addTodo}>Додати задачу</button>
        </div>
    )
}

export default AddNewTodo;
const initialState = {
    todos: [
      { id: 1, title: 'Прибрати в домі', completed: false },
      { id: 2, title: 'Помити авто', completed: false },
      { id: 3, title: 'Сходити в магазин', completed: false },
      { id: 4, title: 'Відправити посилку', completed: false },
    ],
    newTodoTitle: ''
  };
  
const todoReducer = (state = initialState, action) => {
switch (action.type) {
    case 'TOGGLE_TODO':
    const updatedTodos = state.todos.map((todo) => {
        if (todo.id === action.payload.taskId) {
        return { ...todo, completed: !todo.completed };
        } else {
        return todo;
        }
    });
    return { ...state, todos: updatedTodos };
    case 'ADD_TODO':
    if (!state.newTodoTitle) {
        return state;
    }
    const newTodo = {
        id: state.todos.length + 1,
        title: state.newTodoTitle,
        completed: false
    };
    return {
        ...state,
        todos: [...state.todos, newTodo],
        newTodoTitle: ''
    };
    case 'UPDATE_NEW_TODO':
    return { ...state, newTodoTitle: action.payload.newTodoTitle };
    default:
    return state;
}
};

export default todoReducer;
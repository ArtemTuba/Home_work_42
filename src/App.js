import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./components/TodoItem";
import AddNewTodo from "./components/AddTodoItem";



function App() {
  const todos = useSelector(state => state.todos);
  const newTodoTitle = useSelector(state => state.newTodoTitle);
  const dispatch = useDispatch();

  const handleClickTodo = (taskId) => {
    dispatch({ type: 'TOGGLE_TODO', payload: { taskId } });
  };

  const addTodo = () => {
    dispatch({ type: 'ADD_TODO' });
  };

  const updateNewTodoTitle = (e) => {
    dispatch({ type: 'UPDATE_NEW_TODO', payload: { newTodoTitle: e.target.value } });
  };

  return (
    <div>
      <TodoItem todos={todos} handlClickTodo ={handleClickTodo}/>
      <AddNewTodo newTodoTitle={newTodoTitle} addTodo={addTodo} updateNewTodoTitle={updateNewTodoTitle}/>
    </div>
  );
}

export default App;


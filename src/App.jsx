import { useState } from "react";
import Todo from "./Components/Todo";
import { TodoList } from "./Components/TodoList";

function App() {

	const [todos, setTodos] = useState([])

	const deleteTodo = (id) => {
		let newArray = todos.filter(todos => {
			return todos.id !== id
		})
		setTodos(newArray)
	}
		return (
			<div className="App">
				<Todo setTodos={setTodos} />
				<TodoList deleteTodo={deleteTodo} todos={todos} />
			</div>
		);
	}

export default App;
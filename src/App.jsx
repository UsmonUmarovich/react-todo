import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!value.trim()) return alert("Todo kiriting");

    let oldTodos = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];

    const newTodo = {
      id: Date.now(),
      text: value,
    };
    localStorage.setItem("todo", JSON.stringify([...oldTodos, newTodo]));
    setLoading(!loading);
    setValue("");
  };

  useEffect(() => {
    let todos = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];
    setTodos(todos);
  }, [loading]);

  const deleteTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todo", JSON.stringify(newTodos));
    setLoading(!loading);
  };

  return (
    <div className="App">
      <h1>TODO</h1>
      <form onSubmit={submitHandler} style={{ width: 500, margin: "0 auto" }}>
        <input
          value={value}
          onChange={(event) => setValue(event.target.value)}
          type="check"
          placeholder="TODO"
        />
        <button className="btn">ADD</button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <div className="todo">
            <input type="checkbox" className="checkbox"/>
            <li key={index}>{todo.text} </li>
            <button className="x" onClick={() => deleteTodo(todo.id)}>
              X
            </button>
            <hr />
          </div>
        ))}
      </ul>
    </div>
  );
}

export default App;

import { useEffect, useState } from "react";

function Todo(props) {

    const [todo, setTodo] = useState('')
    const [loading, setLoading] = useState(false)

    const submitHandler = (event) => {
        event.preventDefault()

        if (!todo.trim()) {
            return alert('Malumot yozilmagan')
        }
        let oldTodos = localStorage.getItem('todo')
        ? JSON.parse(localStorage.getItem('todo'))
        : [];
        localStorage.setItem("todo", JSON.stringify([...oldTodos, todo]));
        setLoading(!loading)
    };

    useEffect(() => {
        let todos = localStorage.getItem('todo')
        ? JSON.parse(localStorage.getItem('todo'))
        : [];
        props.setTodos(todos)
    }, [loading])

    return (
        <div className="App">
            <h1>TODO</h1>
            <form onSubmit={submitHandler}>
                <div className="input-add">
                    <input value={todo} onChange={(event) => setTodo(event.target.value)} type="text" placeholder="TO-DO"></input>
                    <button className="btn">ADD</button>
                </div>
            </form>
        </div>
    );
}

export default Todo;
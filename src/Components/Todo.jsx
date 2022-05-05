import { useState } from "react";

function Todo(props) {

    const [todo, setTodo] = useState('')

    const submitHandler = (event) => {
        event.preventDefault()

        if (!todo.trim()) {
            return alert('Malumot yozilmagan')
        }
        
        const addTodo = {
            id: Date.now(),
            todo: todo,
        }
        props.setTodos(i => [...i, addTodo])
        setTodo('')
    }

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
import React from 'react'

export const TodoList = (props) => {
    if (props.todos.length === 0) {
        return <p>Todo hozicha yo'q</p>
    } 
    return (
        <div>
            <ol>
                {props.todos.map((todos, index) => {
                    return (
                        <li>
                            <br/>
                            <ul>
                                <li className='li'>{todos.todo}</li>
                                <li><button className='x' onClick={() => props.deleteTodo(todos.id)}>X</button></li>
                            </ul>
                            <br />
                            <hr />
                        </li>
                    )
                })}
            </ol>
        </div>
    )
}

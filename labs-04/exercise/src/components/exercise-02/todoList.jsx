import '../../assets/css/exercise-02/todoList.css';
import React, { useState, useRef } from 'react';

export default function TodoList() {
    let [todo, setTodo] = useState(['Learn ReactJS', 'Go Shopping', 'Buy Flower']);
    let ref = useRef('');

    let addTodo = () => {
        let newTodo = todo;
        setTodo([ref.current.value, ...newTodo]);
        ref.current.value = '';
    }

    let delTodo = (i) => {
        let newTodo = todo;
        let findTodo = newTodo.filter((todo, index) => index !== i);
        setTodo(findTodo);
    }

    return (
        <div className="container-list">
            <h1 className="heading">Todo List</h1>
            <div className="show-list">
                {todo.map((item, index) =>
                    <ul key={index} className={(item === 'Go Shopping') ? 'text-red' : 'ul' && (item === 'Buy Flower') ? 'text-red' : 'ul'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-check-lg icon" viewBox="0 0 16 16">
                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                        </svg>
                            {item}
                        <svg onClick={() => delTodo(index)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg close" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                            <path fillRule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                        </svg>
                    </ul>
                )}
            </div>
            <div className="add-item">
                <input type="text" ref={ref} className="input-add" placeholder="Add a new todo ..."/>
                <button className="btn-add" onClick={addTodo}>Add</button>
            </div>
        </div>
    ) 
}
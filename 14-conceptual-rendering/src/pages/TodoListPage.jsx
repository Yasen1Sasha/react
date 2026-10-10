import react, {useState} from 'react';
import './TodoListPage.css';
import {Link} from "react-router-dom";

const initialTodos = [
    {id: 1, text: 'Купити продукти', priority:'high'},
    {id: 2, text: 'Прибрати кімнату', priority: 'low'},
    {id: 3, text: 'Зробити домашнє завдання', priority: 'low'},
];

const TodoListPage = () => {
    const [todos, setTodos] = useState(initialTodos);
    const [newTodoText, setNewTodoText] = useState('');

    const handleAddTodo = () => {
        if (newTodoText.trim() === ''){
            return;
    }

        const newTodo = {
            id: Date.now(),
            text: newTodoText,
            priority: 'low',
        };

        setTodos([...todos, newTodo]);
        setNewTodoText('');
    };

    return (
        <div className="page-container">
            <h1>Список справ</h1>
        </div>
    );
};

export default TodoListPage;


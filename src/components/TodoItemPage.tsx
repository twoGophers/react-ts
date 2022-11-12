import React, {FC, useEffect, useState} from 'react';
import {ITodo} from "../types/types";
import axios from "axios";
import {useNavigate, useParams} from 'react-router-dom';

export const TodoItemPage: FC = () => {
    const [todo, setTodo] = useState<ITodo | null>(null)
    const params = useParams()
    const history = useNavigate()

    useEffect(() => {
        fetchUser()
    }, [])

    async function fetchUser() {
        try {
            const response = await axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos/' + params.id)
            setTodo(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <button onClick={() => history('/')}>Back</button>
            <h1>Страница todo {todo?.id}</h1>
            <div>
                {todo?.id}
            </div>
            <div>
                {todo?.title} {todo?.completed}
            </div>
        </div>
    );
}

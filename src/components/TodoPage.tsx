import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { ITodo } from '../types/types';
import List from './List';
import { TodoItem } from './TodoItem';
import { useNavigate } from 'react-router-dom';

export const TodoPage: FC = () => {
    const [todos, setTodo] = useState<ITodo[]>([]);
    const history = useNavigate();
  
    useEffect(() => {
      fetchTodo();
    }, []);
  
  
    async function fetchTodo() {
      try {
        const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
        setTodo(response.data);
        
      } catch (error) {
        console.log(error);
        
      }
    }
  return (
    <List items={todos} renderItem={(todo: ITodo) => <TodoItem onClick={(todo) => history('/todos/' + todo.id)}  todo={todo} key={todo.id} />} />
  )
}

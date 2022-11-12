import React, { FC } from 'react';
import { ITodo } from '../types/types';

interface TodoItemProps {
    todo: ITodo;
    onClick: (todo: ITodo) => void;
}

export const TodoItem: FC<TodoItemProps> = ({ todo, onClick }) => {
  return (
    <div onClick={() => onClick(todo)}>
        <input type="checkbox" checked={todo.completed} name="" id="" />
        {todo.id}. {todo.title}
    </div>
  )
}

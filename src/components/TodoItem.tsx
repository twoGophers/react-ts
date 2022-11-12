import React, { FC } from 'react';
import { ITodo } from '../types/types';

interface TodoItemProps {
    todo: ITodo;
}

export const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
        <input type="checkbox" checked={todo.completed} name="" id="" />
        {todo.id}. {todo.title}
    </div>
  )
}

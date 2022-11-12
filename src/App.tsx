import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Card, { CardVariant } from './components/Card';
import List from './components/List';
import { TodoItem } from './components/TodoItem';
import { UserUser } from './components/UserItem';
import UserList from './components/UserList';
import { ITodo, IUser } from './types/types';

function App() {

  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodo] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodo();
  }, []);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
      
    } catch (error) {
      console.log(error);
      
    }
  }

  async function fetchTodo() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
      setTodo(response.data);
      
    } catch (error) {
      console.log(error);
      
    }
  }
  

  return (
    <>
      <Card onClick={(num) => console.log('click', num)} variant={CardVariant.primary} width='200px' height='200px'>
        <button>Button</button>
      </Card>
      <List items={users} renderItem={(user: IUser) => <UserUser user={user} key={user.id} />} />
      <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
    </>
  );
}

export default App;

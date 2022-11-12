import axios from 'axios';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card, { CardVariant } from './components/Card';
import { EventsExample } from './components/EventsExample';
import { TodoItemPage } from './components/TodoItemPage';
import { TodoPage } from './components/TodoPage';
import UserItemPage from './components/UserItemPage';
import { UserPage } from './components/UserPage';

function App() {
  return (
    <>
    {/* <EventsExample />
      <Card onClick={(num) => console.log('click', num)} variant={CardVariant.primary} width='200px' height='200px'>
        <button>Button</button>
      </Card> */}
      <NavLink to={'/'}>Пользователи</NavLink>
      <NavLink to={'/todos'}>Список дел</NavLink>
      <Routes>
        <Route path='/' element={<UserPage />} />
        <Route path='/:id' element={<UserItemPage />} />
        <Route path='/todos' element={<TodoPage />} />
        <Route path='/todos/:id' element={<TodoItemPage />} />
      </Routes>
    </>
  );
}

export default App;

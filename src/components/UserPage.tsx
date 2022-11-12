import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { IUser } from '../types/types';
import List from './List';
import { UserUser } from './UserItem';
import { useNavigate } from 'react-router-dom';

export const UserPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const history = useNavigate();
  
    useEffect(() => {
      fetchUsers();
    }, []);
  
    async function fetchUsers() {
      try {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        
      } catch (error) {
        console.log(error);
        
      }
    }
  return (
    <List items={users} renderItem={(user: IUser) => <UserUser onClick={(user) => history('/' + user.id)} user={user} key={user.id} />} />
  )
}

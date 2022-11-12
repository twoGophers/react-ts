import React, { FC } from 'react';
import { IUser } from '../types/types';

interface UserUserProps {
    user: IUser;
    onClick: (user: IUser) => void;
}

export const UserUser: FC<UserUserProps> = ({ user, onClick }) => {
  return (
    <div onClick={() => onClick(user)} style={{ width: `100%`, padding: `10px`, border: `1px solid gray`}}>
        {user.id}. {user.name} проживает в городе {user.address.city} на улице {user.address.street}
    </div>
  )
}

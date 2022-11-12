import React, { FC } from "react";
import { IUser } from "../types/types";
import { UserUser } from "./UserItem";

interface UserListProps  {
    users: IUser[]
}

const UserList: FC<UserListProps> = ({users}) => {
   
    return (
        <div>
            {
                users.map(item => (
                    <UserUser key={item.id} user={item}  />
                ))
            }
        </div>
    )
}

export default UserList;
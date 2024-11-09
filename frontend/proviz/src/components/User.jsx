import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/api';

const UsersList = () => {
    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            const data = await getUsers();
            setUsers(data);
        };
        fetchData();
    }, []);
    
    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map(user => (
                    <li key={user._id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default UsersList;

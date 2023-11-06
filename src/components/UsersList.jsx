
import React from 'react';
import User from './User';
import './UsersList.css';

const UsersList = ({ users }) => {
  return (
    <div className="users">
      <ul>
        {users.map((user) => (

          <User
            key={user.id}
            name={user.name}
            age={user.age}
            major={user.major}
            img={user.img} 
            alt={user.name}         
        />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;


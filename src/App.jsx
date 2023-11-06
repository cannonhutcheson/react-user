
import React, { useState } from 'react';
import User from './components/User';
import AddUser from './components/AddUser';
import Hdr from './components/Hdr';
import UsersList from './components/UsersList';

function App() {
  const [users, setUsers] = useState([]);

  const submitHandler = (newUser) => {
    setUsers((prevUsers) => [newUser, ...prevUsers]);
  };

  return (
    <div>
      <Hdr />
      <AddUser submitHandler={submitHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;





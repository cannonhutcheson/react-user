
import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import './AddUser.css';

const AddUser = ({ submitHandler }) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [img, setImg] = useState('');
  const [major, setMajor] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // creating the new user
    const newUser = {
      id: Math.random().toString(), // creating the ID randomly
      name: username, 
      age: age,
      img: img,
      major: major,
    };

    submitHandler(newUser); // passing the new user through the EH from App.jsx

    // cleaning up the form after the event has been handled
    setUsername('');
    setAge('');
    setImg('');
    setMajor('');
  };

  return (
    <Card className="input">
      <form onSubmit={handleFormSubmit}>
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Age (Years)</label>
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label>Link to image</label>
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <label>Major</label>
        <input
          type="text"
          value={major}
          onChange={(e) => setMajor(e.target.value)}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;

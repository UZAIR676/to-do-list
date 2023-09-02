"use client"
import React, { useState } from 'react';

const pageStyle = {
  backgroundColor: 'blue',
  // Add any other styles you want here
};

export const Page = () => {
  const [title, setTitle] = useState('');
  const [disk, setDisk] = useState('');
  const [maintask, setMaintask] = useState([]);
  
  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === '' || disk.trim() === '') {
      alert('Please enter both a title and description for the task.');
      return;
    }
    
    setMaintask([...maintask, { title, disk }]);
    setTitle('');
    setDisk('');
  };

  const deleteTask = (index) => {
    const updatedTasks = [...maintask];
    updatedTasks.splice(index, 1);
    setMaintask(updatedTasks);
  };

  return (
    <div style={pageStyle}>
      <h1 className='bg-black text-white text-5xl p-5 font-bold text-center text-transform: uppercase'>
        Uzair To-Do List
      </h1>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          className='text-2xl border-2 px-5 py-2 m-8'
          placeholder='Enter Task Title'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          className='text-2xl border-2 px-5 py-2 m-8'
          placeholder='Enter Task Description'
          value={disk}
          onChange={(e) => {
            setDisk(e.target.value);
          }}
        />
        <button className='bg-black text-white px-4 py-2 text-3xl font-bold m-5 rounded' type="submit">
          ADD TASK
        </button>
      </form>
      <hr />
      <div>
        {maintask.length === 0 ? (
          <h2>No tasks available</h2>
        ) : (
          <ul>
            {maintask.map((task, i) => (
              <li key={i}>
                <h5>{task.title}</h5>
                <h3>{task.disk}</h3>
                <button
                  className='bg-red-500 text-white px-2 py-1 text-2xl font-bold rounded'
                  onClick={() => deleteTask(i)}
                >
                  Delete Task
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Page;


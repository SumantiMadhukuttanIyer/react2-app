import React from 'react';

const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    }
    return(
    <form onSubmit={addUserHandler}>
        <label htmlFor="username">Customer Name</label>
        <input id="username" type="text" />
        <label htmlFor="age">Customer Age</label>
        <input id="age" type="number" />
        <button type="submit">Enter Data</button>
    </form>
    );
};

export default AddUser;  
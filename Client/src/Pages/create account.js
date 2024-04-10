import React, { useState } from 'react';
import FForm from'../components/Form'

function Form() {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [createdOn, setCreatedOn] = useState('');
    const [deadline, setDeadline] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); 
        console.log(name, title, createdBy, createdOn, deadline);
    };

    return (
        <div className='form'>
            <div className='App2'>
                <form onSubmit={handleSubmit}>
                    <FForm label='Name' id='name' type='text' onChange={(e) => setName(e.target.value)} value={name} placeholder='Name'/>
                    <FForm label='Title' id='title' type='text' onChange={(e) => setTitle(e.target.value)} value={title} placeholder='Title'/>
                    <FForm label='Created By' id='createdBy' type='text' onChange={(e) => setCreatedBy(e.target.value)} value={createdBy} placeholder='Created by'/>
                    <FForm label='Created On ' id='createdOn' type='text' onChange={(e) => setCreatedOn(e.target.value)} value={createdOn} placeholder='Created on'/>
                    <FForm label='Dead Line' id='deadline' type='date' onChange={(e) => setDeadline(e.target.value)} value={deadline} placeholder='Deadline'/>
                    {/* <Dropdown/> Can be added later if needed */}
                    <button  onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Form;

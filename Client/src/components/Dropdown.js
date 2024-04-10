import React from 'react';

function Dropdown() {
    return (

        <div className='mb-3'>
          <label for="status" class="form-label">Status</label>
          <select className='dd'>
            <option value="fruit">To-Do</option>
            <option value="vegetable">In Progress</option>
            <option value="meat">Done</option>
          </select>
     
        </div>
     
      );
}

export default Dropdown;

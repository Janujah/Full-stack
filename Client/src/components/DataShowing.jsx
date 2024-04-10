import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function DataShowing() {
    const [views, setView] = useState([])
    
    useEffect (() => {
        axios.get('http://localhost:3004/view')
        .then(views=> setView(views.data))
        .catch (err=>console.log(err))
    },[])
  return (
    <div>
      <h1>Data Showing</h1>
      <table>
        <thead>
            <th>Title</th>
            <th>Contant</th>
            <th>Created By</th>
        </thead>
        <tbody>
            {views.map(view => {
                return <tr>
                <td>{view.title}</td>
                <td>{view.contant}</td>
                <td>{view.created_by}</td>

            </tr>
            })}
            
        </tbody>
      </table>
    </div>
  )
};

export default DataShowing;

import React from 'react';
import Nav from '../components/navbar2'

function Navbar() {
    return (
        <div>
            <Nav/>
          <div id='home'>
                <h1 id='welcome'>Welcome</h1>
                <h2 id='date'>Save your dates Here</h2>
            </div>
        </div>
    )
};

export default Navbar;

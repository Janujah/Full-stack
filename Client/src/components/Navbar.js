import React from 'react';

function Navbar() {
    return (
        <div>
         <ul class="nav justify-content-end">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/"><i class="fa-solid fa-house" ></i></a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/login"><i class="fa-solid fa-note-sticky"></i></a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="login"><i class="fa-solid fa-user"></i></a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/login"><i class="fa-solid fa-address-book"></i></a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/login"><i class="fa-solid fa-right-to-bracket"></i></a>
            </li>
          </ul>
        </div>



    )
}

export default Navbar;

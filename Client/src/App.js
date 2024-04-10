import './App.css';
import Login from './Pages/Login';
import {Route, Routes} from 'react-router-dom';
import Ca from './Pages/create account';
import Rf from './Pages/register-form';
import Home from './Pages/home';
import Nav from './components/home2';
import Note from './Pages/note';
import Contact from './Pages/contact';
import DS from './components/DataShowing'




function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Create-Account' element={<Ca/>}/>
        <Route path='/Register' element={<Rf/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/home' element={<Nav/>}/>
        <Route path='/note' element={<Note/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/create' element={<Ca/>}/>
      </Routes>
    </div>
  );
}

export default App;

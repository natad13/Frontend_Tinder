import {Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Persona from '../pages/Persona';
import Registro from '../pages/Registro';

const RouterIndex = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Persona' element={<Persona />} />
            <Route path='/Registro' element={<Registro />} />
            
        </Routes>
    )
}

export default RouterIndex;
import {Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Persona from '../pages/Persona';
import Registro from '../pages/Registro';
import RegistroEmpresa from '../pages/RegistroEmpresa';

const RouterIndex = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Home' element={<Home/>} />
            <Route path='/Persona' element={<Persona />} />
            <Route path='/Registro' element={<Registro />} />
            <Route path='/RegistroEmpresa' element={<RegistroEmpresa />} />
            
        </Routes>
    )
}

export default RouterIndex;
import {Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import InicioSesion from '../pages/InicioSesion';
import Registro from '../pages/Registro';

const RouterIndex = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/InicioSesion' element={<InicioSesion />} />
            <Route path='/Registro' element={<Registro />} />
            
        </Routes>
    )
}

export default RouterIndex;
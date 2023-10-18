import {Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Persona from '../pages/Persona';
import Registro from '../pages/Registro';
import RegistroEmpresa from '../pages/RegistroEmpresa';
import MostrarPerfiles from '../pages/MostrarPerfiles';
import Tarea from '../pages/Tarea';
import PerfilEmpresa from '../pages/PerfilEmpresa';
import ConsultarServicios from '../pages/ConsultarServicios';

const RouterIndex = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/Home' element={<Home/>} />
            <Route path='/Persona' element={<Persona />} />
            <Route path='/Registro' element={<Registro />} />
            <Route path='/RegistroEmpresa' element={<RegistroEmpresa />} />
            <Route path='/MostrarPerfiles/:id' element={<MostrarPerfiles/>} />
            <Route path='/Tarea/:id_empresa/:id_persona' element={<Tarea/>} />
            <Route path='/PerfilEmpresa/:id_empresa' element={<PerfilEmpresa/>} />
            <Route path='/ConsultarServicios/:id_empresa' element={<ConsultarServicios/>} />
            
            
        </Routes>
    )
}

export default RouterIndex;
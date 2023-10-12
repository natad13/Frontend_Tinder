import { useState,useEffect } from 'react'
import InicioSesion from './InicioSesion';
import Registro from './Registro';
import { Link } from 'react-router-dom';


const Home = () => {
  
 

  return (
    <>
    <h1> Tinder de Habilidades</h1>
    <h1>Bienvenido </h1>
    <br />
    <div>
    <button > <Link to={`/InicioSesion`}>Iniciar Sesion </Link></button>
    </div>
    <br />
    <div>
    <button > <Link to={`/Registro`}>Registrarse </Link></button>
    </div>
    
   
    
    </>
  )
}

export default Home

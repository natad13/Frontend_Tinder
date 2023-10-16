import { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Registro from './Registro';
import Persona from './Persona';
import { Link } from 'react-router-dom';
import '../style.css'

const Home = () => {

    const [Usuario, setUsuario] = useState("");
    const [Password, setPassword] = useState("");
    const [Tipo, setTipo] = useState("");
    const navigate = useNavigate();
    const url ="https://backend-tinder.onrender.com"


    const login = (usuario, password, tipo) => {
      console.log('entre a funcion login ')
      fetch(`${url}/api/v1/login/auth`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "usuario": usuario,
                "contrasena":password,
                "tipo":tipo
            })
        })
        .then(response => response.json())
        .then(json => {
          console.log("hellow")
          console.log(json)
          if(json.token) {
            console.log(json.token)
            window.sessionStorage.setItem('token', json.token);
            alert('inicio correcto');
            navigate('/Persona');
        } else {
            alert('Datos incorrectos');
        }
      })      
      console.log(usuario);
      console.log(tipo);
    };

 

  return (
    <>
      <h1 className='Titulo'> Tinder de Habilidades</h1>
      
      <div className='inicioSesion row'>
        <h1> Bienvenido</h1>
        <form onSubmit={ev => {
          ev.preventDefault();
          login(Usuario, Password, Tipo);
        }} >
          <div className='form-group cuadrosSesion '>
            <label >Usuario</label>
            <input className="form-control" placeholder="Ingrese su usuario" value={Usuario} onChange={ev => setUsuario(ev.target.value)}></input>

          </div>
          <div className='form-group cuadrosSesion'>
            <label >Contraseña</label>
            <input className="form-control" placeholder="Ingrese su Contraseña" value={Password} onChange={ev => setPassword(ev.target.value)}></input>
          </div>

          <div className='dropdown cuadrosSesion'>

            <select className="form-select" name="color" onChange={ev => setTipo(ev.target.value)}>
              <option selected>Elija el tipo de usuario</option>
              <option value={"empresa"}> Empresa</option>
              <option value={"persona"}> Persona</option>
            </select>
          </div>

          <button type="submit" className=' botonIncio' > Iniciar Sesion </button>
        </form>
        <div>
          <button type="submit" className='botonIncio' > Registrarse </button>
        </div>

      </div>
      
      


    {/* <h1> Tinder de Habilidades</h1>
    <h1>Bienvenido </h1>
    <br />
    <div>
    <button > <Link to={`/InicioSesion`}>Iniciar Sesion </Link></button>
    </div>
    <br />
    <div>
    <button > <Link to={`/Registro`}>Registrarse </Link></button>
    </div> */}
    
   
    
    </>
  )
}

export default Home

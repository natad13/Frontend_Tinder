import { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import Registro from './Registro';
import Persona from './Persona';
import MostrarPerfiles from './MostrarPerfiles';
import RegistroEmpresa from './RegistroEmpresa';
import { Link } from 'react-router-dom';
import '../style.css'

const Home = () => {

    const [Usuario, setUsuario] = useState("");
    const [Password, setPassword] = useState("");
    const [Tipo, setTipo] = useState("");
    const navigate = useNavigate();
    const [inicio, setInicio]=useState("");
    const url1 ="https://backend-tinder.onrender.com"
    const url2 = "http://localhost:3000"

    const sesion = () => {
      setInicio("Usuario o contraseña incorrecta");
  }

    const login = (usuario, password, tipo) => {
      console.log('entre a funcion login ')
      fetch(`${url2}/api/v1/login/auth`, {
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
          console.log("datos de vuelta")
          console.log(json)
          
          const token = json[0].token;
          console.log(token)
          const id = json[1].id
            if(token) {
              console.log(json[1].id)
              window.sessionStorage.setItem('token', token);
              if (tipo == "persona") {
                navigate('/Persona');

              }else{
                navigate(`/PerfilEmpresa/${id}`);
              }  
        }
      }).catch(error => {
        sesion()
       
    })      
   
    };

 

  return (
    <>
      <h2 className='Titulo'> Tinder de Habilidades</h2>
      
      <div className='inicioSesion row'>
        <h1> Bienvenido</h1>
        <h4> {inicio} </h4>
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
            <input type='password' className="form-control" placeholder="Ingrese su Contraseña" value={Password} onChange={ev => setPassword(ev.target.value)}></input>
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
          <button type="submit" className='botonIncio' > <Link className='registro'
                  to={'/RegistroEmpresa'}> Registrar Empresa </Link> 
          </button>

          <button type="submit" className='botonIncio ' > <Link className='registro'
                  to={'/Registro'}> Registrar Persona </Link> 
          </button>
        </div>
      

      </div>
   
    
    </>
  )
}

export default Home;
